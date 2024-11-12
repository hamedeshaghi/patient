// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicFilterRowSingle,
  DefaultFilterRowSingleProps
} from "./plasmic/paziresh_24_search/PlasmicFilterRowSingle";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface FilterRowSingleProps extends Omit<DefaultFilterRowSingleProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultFilterRowSingleProps altogether and have
// total control over the props for your component.
export interface FilterRowSingleProps extends DefaultFilterRowSingleProps {}

function FilterRowSingle_(
  props: FilterRowSingleProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicFilterRowSingle to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicFilterRowSingle are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all FilterRowSingleProps here, but feel free
  // to do whatever works for you.

  return <PlasmicFilterRowSingle root={{ ref }} {...props} />;
}

const FilterRowSingle = React.forwardRef(FilterRowSingle_);
export default FilterRowSingle;