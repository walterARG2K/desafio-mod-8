import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { MyRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const rootEl = document.querySelector(".root");
const root = createRoot(rootEl);

root.render(
    <RecoilRoot>
        <Suspense fallback={null}>
            <BrowserRouter>
                <MyRoutes />
            </BrowserRouter>
        </Suspense>
    </RecoilRoot>
);
