export default (vp: { _l: (val: unknown, render: unknown) => unknown }) => {
  const old = vp._l;
  vp._l = (val: unknown, render: unknown) => {
    console.log("xxxxxx", val);
    return old(val, render);
  };
};
