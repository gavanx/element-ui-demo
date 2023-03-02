export default (vp: { _l: (val: unknown, render: unknown) => unknown }) => {
  const old = vp._l;
  vp._l = (val: unknown, render: unknown) => {
    console.log("wrapRenderList", typeof val, Array.isArray(val), val);
    if (Array.isArray(val)) {
      val = val.slice(0, 30);
    }
    const ret = old(val, render) as Array;
    console.log("ret", ret);
    return ret.slice(0, 30);
  };
};
