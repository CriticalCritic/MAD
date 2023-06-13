const sq = (x) => x*x;

const cube = (x) => x*x*x;

const circle_area = (r) => Math.PI*r*r;

const cylinder_volume = (r, h) => Math.PI * sq(r) * h;

export {cube,circle_area, cylinder_volume};
export default sq;