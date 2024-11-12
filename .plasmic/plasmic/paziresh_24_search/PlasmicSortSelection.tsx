// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMdpLWyxbzDCruwMRffW2m
// Component: -Px5cdSoxYMl

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

import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMdpLWyxbzDCruwMRffW2m/projectcss
import sty from "./PlasmicSortSelection.module.css"; // plasmic-import: -Px5cdSoxYMl/css

createPlasmicElementProxy;

export type PlasmicSortSelection__VariantMembers = {};
export type PlasmicSortSelection__VariantsArgs = {};
type VariantPropType = keyof PlasmicSortSelection__VariantsArgs;
export const PlasmicSortSelection__VariantProps = new Array<VariantPropType>();

export type PlasmicSortSelection__ArgsType = {};
type ArgPropType = keyof PlasmicSortSelection__ArgsType;
export const PlasmicSortSelection__ArgProps = new Array<ArgPropType>();

export type PlasmicSortSelection__OverridesType = {
  root?: Flex__<"div">;
  select?: Flex__<typeof AntdSelect>;
};

export interface DefaultSortSelectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSortSelection__RenderFunc(props: {
  variants: PlasmicSortSelection__VariantsArgs;
  args: PlasmicSortSelection__ArgsType;
  overrides: PlasmicSortSelection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <AntdSelect
        data-plasmic-name={"select"}
        data-plasmic-override={overrides.select}
        className={classNames("__wab_instance", sty.select)}
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_fragment_design_system_css.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens
        )}
        onChange={generateStateOnChangeProp($state, ["select", "value"])}
        options={[
          { value: "option1", label: "Option 1", type: "option" },
          { value: "option2", label: "Option 2", type: "option" }
        ]}
        placeholder={"\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}
        popupScopeClassName={sty["select__popup"]}
        value={generateStateValueProp($state, ["select", "value"])}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "select"],
  select: ["select"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  select: typeof AntdSelect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSortSelection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSortSelection__VariantsArgs;
    args?: PlasmicSortSelection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSortSelection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSortSelection__ArgsType,
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
          internalArgPropNames: PlasmicSortSelection__ArgProps,
          internalVariantPropNames: PlasmicSortSelection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSortSelection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSortSelection";
  } else {
    func.displayName = `PlasmicSortSelection.${nodeName}`;
  }
  return func;
}

export const PlasmicSortSelection = Object.assign(
  // Top-level PlasmicSortSelection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    select: makeNodeComponent("select"),

    // Metadata about props expected for PlasmicSortSelection
    internalVariantProps: PlasmicSortSelection__VariantProps,
    internalArgProps: PlasmicSortSelection__ArgProps
  }
);

export default PlasmicSortSelection;
/* prettier-ignore-end */