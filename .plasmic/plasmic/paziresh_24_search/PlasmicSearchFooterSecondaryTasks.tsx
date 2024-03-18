// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMdpLWyxbzDCruwMRffW2m
// Component: H6s7UfVqSPjE

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMdpLWyxbzDCruwMRffW2m/projectcss
import sty from "./PlasmicSearchFooterSecondaryTasks.module.css"; // plasmic-import: H6s7UfVqSPjE/css

import InfoIcon from "../fragment_icons/icons/PlasmicIcon__Info"; // plasmic-import: 7Dhq6fgU-utK/icon

createPlasmicElementProxy;

export type PlasmicSearchFooterSecondaryTasks__VariantMembers = {};
export type PlasmicSearchFooterSecondaryTasks__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearchFooterSecondaryTasks__VariantsArgs;
export const PlasmicSearchFooterSecondaryTasks__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSearchFooterSecondaryTasks__ArgsType = {
  taskObject?: any;
};
type ArgPropType = keyof PlasmicSearchFooterSecondaryTasks__ArgsType;
export const PlasmicSearchFooterSecondaryTasks__ArgProps =
  new Array<ArgPropType>("taskObject");

export type PlasmicSearchFooterSecondaryTasks__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultSearchFooterSecondaryTasksProps {
  taskObject?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSearchFooterSecondaryTasks__RenderFunc(props: {
  variants: PlasmicSearchFooterSecondaryTasks__VariantsArgs;
  args: PlasmicSearchFooterSecondaryTasks__ArgsType;
  overrides: PlasmicSearchFooterSecondaryTasks__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <InfoIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />

        <PlasmicLink__
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link
          )}
          component={Link}
          href={(() => {
            try {
              return `${$props.taskObject.destination}?url=${encodeURIComponent(
                window.location.href
              )}&tid=${document.cookie.replace(
                /(?:(?:^|.*;\s*)terminal_id\s*\=\s*([^;]*).*$)|^.*$/,
                "$1"
              )}`;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "https://newsupport.paziresh24.com/";
              }
              throw e;
            }
          })()}
          platform={"nextjs"}
          target={(() => {
            try {
              return $props.taskObject.openInNewTab;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.taskObject.title;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Some link text";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </PlasmicLink__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg", "link"],
  freeBox: ["freeBox", "svg", "link"],
  svg: ["svg"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  svg: "svg";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearchFooterSecondaryTasks__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearchFooterSecondaryTasks__VariantsArgs;
    args?: PlasmicSearchFooterSecondaryTasks__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearchFooterSecondaryTasks__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSearchFooterSecondaryTasks__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSearchFooterSecondaryTasks__ArgProps,
          internalVariantPropNames:
            PlasmicSearchFooterSecondaryTasks__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSearchFooterSecondaryTasks__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchFooterSecondaryTasks";
  } else {
    func.displayName = `PlasmicSearchFooterSecondaryTasks.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchFooterSecondaryTasks = Object.assign(
  // Top-level PlasmicSearchFooterSecondaryTasks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSearchFooterSecondaryTasks
    internalVariantProps: PlasmicSearchFooterSecondaryTasks__VariantProps,
    internalArgProps: PlasmicSearchFooterSecondaryTasks__ArgProps
  }
);

export default PlasmicSearchFooterSecondaryTasks;
/* prettier-ignore-end */