// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7r312uiqyadpVPdnRoAggk
// Component: VlJvd0AHTT9_

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

import Collapsible from "../../Collapsible"; // plasmic-import: kYXN54tCkD2S/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7r312uiqyadpVPdnRoAggk/projectcss
import sty from "./PlasmicProfileAbout.module.css"; // plasmic-import: VlJvd0AHTT9_/css

import ChevronDownIcon from "../fragment_icons/icons/PlasmicIcon__ChevronDown"; // plasmic-import: aC_QFogxt1Ko/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon
import ChevronUpIcon from "../fragment_icons/icons/PlasmicIcon__ChevronUp"; // plasmic-import: YXreB8gS3SjV/icon

createPlasmicElementProxy;

export type PlasmicProfileAbout__VariantMembers = {};
export type PlasmicProfileAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfileAbout__VariantsArgs;
export const PlasmicProfileAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicProfileAbout__ArgsType = {
  information?: any;
};
type ArgPropType = keyof PlasmicProfileAbout__ArgsType;
export const PlasmicProfileAbout__ArgProps = new Array<ArgPropType>(
  "information"
);

export type PlasmicProfileAbout__OverridesType = {
  root?: Flex__<"div">;
  h2?: Flex__<"h2">;
  collapsible?: Flex__<typeof Collapsible>;
};

export interface DefaultProfileAboutProps {
  information?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfileAbout__RenderFunc(props: {
  variants: PlasmicProfileAbout__VariantsArgs;
  args: PlasmicProfileAbout__ArgsType;
  overrides: PlasmicProfileAbout__OverridesType;
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__q5Jgk)}
      >
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
        >
          {"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646"}
        </h2>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__djeR5)}
        >
          {(() => {
            try {
              return (
                $props.information.biography.replace(/<[^>]+>/g, "").length >
                750
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <Collapsible
              data-plasmic-name={"collapsible"}
              data-plasmic-override={overrides.collapsible}
              className={classNames("__wab_instance", sty.collapsible)}
              slot={
                <div className={classNames(projectcss.all, sty.freeBox__w7QYx)}>
                  <Button
                    children2={
                      "\u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0645\u062a\u0631"
                    }
                    className={classNames("__wab_instance", sty.button__f422L)}
                    color={"text"}
                    showStartIcon={true}
                    size={"compact"}
                    startIcon={
                      <ChevronUpIcon
                        className={classNames(projectcss.all, sty.svg__ksmZb)}
                        role={"img"}
                      />
                    }
                  />
                </div>
              }
              slot2={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jIy7H
                  )}
                >
                  <div
                    className={projectcss.__wab_expr_html_text}
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        try {
                          return $props.information.biography;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "";
                          }
                          throw e;
                        }
                      })()
                    }}
                  />
                </div>
              }
            >
              <div className={classNames(projectcss.all, sty.freeBox__pz6Dy)}>
                <Button
                  children2={
                    "\u0645\u0634\u0627\u0647\u062f\u0647 \u0628\u06cc\u0634\u062a\u0631"
                  }
                  className={classNames("__wab_instance", sty.button___87O5G)}
                  color={"text"}
                  showStartIcon={true}
                  size={"compact"}
                  startIcon={
                    <ChevronDownIcon
                      className={classNames(projectcss.all, sty.svg__cdurB)}
                      role={"img"}
                    />
                  }
                />
              </div>
            </Collapsible>
          ) : null}
          {(() => {
            try {
              return (
                $props.information.biography.replace(/<[^>]+>/g, "").length <=
                750
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vDoPe
              )}
            >
              <div
                className={projectcss.__wab_expr_html_text}
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    try {
                      return $props.information.biography;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "";
                      }
                      throw e;
                    }
                  })()
                }}
              />
            </div>
          ) : null}
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2", "collapsible"],
  h2: ["h2"],
  collapsible: ["collapsible"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
  collapsible: typeof Collapsible;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfileAbout__VariantsArgs;
    args?: PlasmicProfileAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfileAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProfileAbout__ArgsType,
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
          internalArgPropNames: PlasmicProfileAbout__ArgProps,
          internalVariantPropNames: PlasmicProfileAbout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfileAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileAbout";
  } else {
    func.displayName = `PlasmicProfileAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileAbout = Object.assign(
  // Top-level PlasmicProfileAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    collapsible: makeNodeComponent("collapsible"),

    // Metadata about props expected for PlasmicProfileAbout
    internalVariantProps: PlasmicProfileAbout__VariantProps,
    internalArgProps: PlasmicProfileAbout__ArgProps
  }
);

export default PlasmicProfileAbout;
/* prettier-ignore-end */
