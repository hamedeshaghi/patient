// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYgiKJB9Yi7CUB81stQBK
// Component: kTqhvVPX-KFr

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

import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iDYgiKJB9Yi7CUB81stQBK/projectcss
import sty from "./PlasmicHomePixel.module.css"; // plasmic-import: kTqhvVPX-KFr/css

createPlasmicElementProxy;

export type PlasmicHomePixel__VariantMembers = {};
export type PlasmicHomePixel__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomePixel__VariantsArgs;
export const PlasmicHomePixel__VariantProps = new Array<VariantPropType>();

export type PlasmicHomePixel__ArgsType = {};
type ArgPropType = keyof PlasmicHomePixel__ArgsType;
export const PlasmicHomePixel__ArgProps = new Array<ArgPropType>();

export type PlasmicHomePixel__OverridesType = {
  root?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultHomePixelProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomePixel__RenderFunc(props: {
  variants: PlasmicHomePixel__VariantsArgs;
  args: PlasmicHomePixel__ArgsType;
  overrides: PlasmicHomePixel__OverridesType;
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
        plasmic_paziresh_24_design_system_css.plasmic_tokens,
        sty.root
      )}
    >
      <Embed
        data-plasmic-name={"embedHtml"}
        data-plasmic-override={overrides.embedHtml}
        className={classNames("__wab_instance", sty.embedHtml)}
        code={'<script>\r\n    console.log("test");\r\n</script>'}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "embedHtml"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomePixel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomePixel__VariantsArgs;
    args?: PlasmicHomePixel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomePixel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomePixel__ArgsType,
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
          internalArgPropNames: PlasmicHomePixel__ArgProps,
          internalVariantPropNames: PlasmicHomePixel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomePixel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomePixel";
  } else {
    func.displayName = `PlasmicHomePixel.${nodeName}`;
  }
  return func;
}

export const PlasmicHomePixel = Object.assign(
  // Top-level PlasmicHomePixel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicHomePixel
    internalVariantProps: PlasmicHomePixel__VariantProps,
    internalArgProps: PlasmicHomePixel__ArgProps
  }
);

export default PlasmicHomePixel;
/* prettier-ignore-end */
