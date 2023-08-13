import "@/reset.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import router from "@/router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import { Spin } from "antd";
import { setUser } from "@/stores/userSlice";
import { $onExec, $done, isMerak, $onDestroy, $namespace } from "merak-helper";
function setup() {
  const container = document.getElementById("root")!;

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Suspense
          fallback={
            <Spin>
              <div style={{ width: "100%", height: "200px" }}></div>
            </Spin>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </React.StrictMode>
  );
  return root;
}

function changeUserListener(e: any) {
  store.dispatch((dispatch) => {
    dispatch(setUser(e.user));
  });
}

function routerChangeListener(e: any) {
  console.log(e)
  router.navigate(e.path, { replace: e.replace });
}

let root: ReactDOM.Root | undefined;

$onExec(() => {
  if (isMerak()) {
    console.log('exec')
    const { emitter } = $namespace();
    emitter.on("changeUser", changeUserListener);
    emitter.on("reactApp:router-change", routerChangeListener);
  }
  root = setup();
});
$onDestroy(() => {
  root?.unmount();
  if (isMerak()) {
    console.log('destroy',root)

    const { emitter } = $namespace();

    emitter.off("changeUser", changeUserListener);
    emitter.off("reactApp:router-change", routerChangeListener);
  }
  $done();
});

//@ts-expect-error webpack public path
__webpack_public_path__ = (window.__merak_url__ || "") + "/";
