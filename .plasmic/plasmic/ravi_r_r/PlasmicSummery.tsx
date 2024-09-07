// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qQzsBf58SqzNJX45iggq96
// Component: JoYR24nI9z66

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

import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qQzsBf58SqzNJX45iggq96/projectcss
import sty from "./PlasmicSummery.module.css"; // plasmic-import: JoYR24nI9z66/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicSummery__VariantMembers = {};
export type PlasmicSummery__VariantsArgs = {};
type VariantPropType = keyof PlasmicSummery__VariantsArgs;
export const PlasmicSummery__VariantProps = new Array<VariantPropType>();

export type PlasmicSummery__ArgsType = {
  onClickSummery?: (summery: string) => void;
};
type ArgPropType = keyof PlasmicSummery__ArgsType;
export const PlasmicSummery__ArgProps = new Array<ArgPropType>(
  "onClickSummery"
);

export type PlasmicSummery__OverridesType = {
  root?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultSummeryProps {
  onClickSummery?: (summery: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSummery__RenderFunc(props: {
  variants: PlasmicSummery__VariantsArgs;
  args: PlasmicSummery__ArgsType;
  overrides: PlasmicSummery__OverridesType;
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
        (() => {
          try {
            return [
              {
                button_text: "رفتار منشی",
                search_text: "منشی"
              },
              {
                button_text: "هزینه درمان",
                search_text: "هزینه"
              },
              {
                button_text: "توضیح پزشک",
                search_text: "توضیح"
              },
              {
                button_text: "اثربخشی دارو",
                search_text: "دارو"
              },
              {
                button_text: "ریزش مو",
                search_text: "ریزش مو"
              },
              {
                button_text: "اگزمای پوستی",
                search_text: "اگزما"
              },
              {
                button_text: "پیسی",
                search_text: "پیسی"
              },
              {
                button_text: "بیماری پوست",
                search_text: "پوست"
              }
            ];
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return [];
            }
            throw e;
          }
        })()
      ).map((__plasmic_item_0, __plasmic_idx_0) => {
        const currentItem = __plasmic_item_0;
        const currentIndex = __plasmic_idx_0;
        return (
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            children2={
              <React.Fragment>
                {(() => {
                  try {
                    return currentItem.button_text;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\u0631\u0641\u062a\u0627\u0631 \u0645\u0646\u0634\u06cc";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            }
            className={classNames("__wab_instance", sty.button)}
            color={"sand"}
            endIcon={
              <ChevronLeftIcon
                className={classNames(projectcss.all, sty.svg__yHugK)}
                role={"img"}
              />
            }
            key={currentIndex}
            onClick={async event => {
              const $steps = {};

              $steps["runOnClickSummery"] = true
                ? (() => {
                    const actionArgs = {
                      eventRef: $props["onClickSummery"],
                      args: [
                        (() => {
                          try {
                            return currentItem.search_text;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()
                      ]
                    };
                    return (({ eventRef, args }) => {
                      return eventRef?.(...(args ?? []));
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runOnClickSummery"] != null &&
                typeof $steps["runOnClickSummery"] === "object" &&
                typeof $steps["runOnClickSummery"].then === "function"
              ) {
                $steps["runOnClickSummery"] = await $steps["runOnClickSummery"];
              }
            }}
            outline={true}
            shape={"rounded"}
            size={"compact"}
            startIcon={
              <ChevronRightIcon
                className={classNames(projectcss.all, sty.svg__k0Nm)}
                role={"img"}
              />
            }
          />
        );
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSummery__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSummery__VariantsArgs;
    args?: PlasmicSummery__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSummery__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSummery__ArgsType,
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
          internalArgPropNames: PlasmicSummery__ArgProps,
          internalVariantPropNames: PlasmicSummery__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSummery__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSummery";
  } else {
    func.displayName = `PlasmicSummery.${nodeName}`;
  }
  return func;
}

export const PlasmicSummery = Object.assign(
  // Top-level PlasmicSummery renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSummery
    internalVariantProps: PlasmicSummery__VariantProps,
    internalArgProps: PlasmicSummery__ArgProps
  }
);

export default PlasmicSummery;
/* prettier-ignore-end */
