import React, { useEffect, useRef, useState } from "react";

const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};

export default useDidMountEffect;