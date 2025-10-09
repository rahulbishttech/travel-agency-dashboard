// from this file we will export all our other components
export { default as NavItems } from './NavItems';
export { default as MobileSidebar } from './MobileSidebar';
export {default as Header} from './Header';
export {default as StatsCard} from './StatsCard';
export {default as TripCard} from './TripCard'






// benefit of this file

// when you will import many components you have to import like this (too much code)
// import NavItems from './NavItems';
// import MobileSidebar from './MobileSidebar';
// import Header from './Header';


// but because this file , you code will look like this - clean and structured
// import { Header,MobileSidebar, NavItems } from "~/components";