export default (vp: { _l: (val: unknown, render: unknown) => unknown }) => {
  const old = vp._l;
  vp._l = (val: unknown, render: unknown) => {
    console.log("xxxxxx", typeof val, Array.isArray(val), val);
    if (Array.isArray(val)) {
      val = val.slice(0, 30);
    }
    return old(val, render);
  };
};
