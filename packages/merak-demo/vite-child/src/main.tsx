import "@/reset.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import router from "@/router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import { Spin } from "antd";
import { setUser } from "@/stores/userSlice";
import {
  $onExec,
  $onDestroy,
  isMerak,
  $instance,
  $namespace,
  $done,
} from "merak-helper";

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
  router.navigate(e.path, { replace: e.replace || false });
}

let root: ReactDOM.Root | undefined;

$onExec(() => {
  if (isMerak()) {
    $namespace().emitter.on("changeUser", changeUserListener);
    $namespace().emitter.on("viteApp:router-change", routerChangeListener);
  }

  root = setup();
});
$onDestroy(() => {
  root?.unmount();
  if (isMerak()) {
    $namespace().emitter.off("changeUser", changeUserListener);

    $namespace().emitter.off("viteApp:router-change");
  }
  $done();
});
