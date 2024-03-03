// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYgiKJB9Yi7CUB81stQBK
// Component: tue6WliDgeon

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

import DoctorCard from "../../DoctorCard"; // plasmic-import: NhMGML-3Q4Pu/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iDYgiKJB9Yi7CUB81stQBK/projectcss
import sty from "./PlasmicSubstituteDoctor.module.css"; // plasmic-import: tue6WliDgeon/css

createPlasmicElementProxy;

export type PlasmicSubstituteDoctor__VariantMembers = {};
export type PlasmicSubstituteDoctor__VariantsArgs = {};
type VariantPropType = keyof PlasmicSubstituteDoctor__VariantsArgs;
export const PlasmicSubstituteDoctor__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSubstituteDoctor__ArgsType = {
  loading?: string;
  action?: (data: any) => void;
};
type ArgPropType = keyof PlasmicSubstituteDoctor__ArgsType;
export const PlasmicSubstituteDoctor__ArgProps = new Array<ArgPropType>(
  "loading",
  "action"
);

export type PlasmicSubstituteDoctor__OverridesType = {
  root?: Flex__<"div">;
  doctorCard?: Flex__<typeof DoctorCard>;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface DefaultSubstituteDoctorProps {
  loading?: string;
  action?: (data: any) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSubstituteDoctor__RenderFunc(props: {
  variants: PlasmicSubstituteDoctor__VariantsArgs;
  args: PlasmicSubstituteDoctor__ArgsType;
  overrides: PlasmicSubstituteDoctor__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "substituteDoctorData",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
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
        sty.root
      )}
    >
      <DoctorCard
        data-plasmic-name={"doctorCard"}
        data-plasmic-override={overrides.doctorCard}
        aliasTitle={(() => {
          try {
            return $state.substituteDoctor?.display_expertise;
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
        avatar={(() => {
          try {
            return `https://www.paziresh24.com${$state.substituteDoctor?.image}`;
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
        className={classNames("__wab_instance", sty.doctorCard)}
        displayName={(() => {
          try {
            return $state.substituteDoctor?.title;
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
        primaryButtonLoading={(() => {
          try {
            return $props.loading;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return false;
            }
            throw e;
          }
        })()}
        primaryButtonName={`لغو نوبت و دریافت نوبت از ${$state.substituteDoctor?.title}`}
        primaryButtonOnClick={async () => {
          const $steps = {};

          $steps["runAction"] = true
            ? (() => {
                const actionArgs = {
                  eventRef: $props["action"],
                  args: [
                    (() => {
                      try {
                        return $state.substituteDoctorData;
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
            $steps["runAction"] != null &&
            typeof $steps["runAction"] === "object" &&
            typeof $steps["runAction"].then === "function"
          ) {
            $steps["runAction"] = await $steps["runAction"];
          }
        }}
        rateCount={(() => {
          try {
            return $state.substituteDoctor?.rates_count;
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
        satisfaction={(() => {
          try {
            return $state.substituteDoctor?.satisfaction;
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
      />

      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        onMount={async () => {
          const $steps = {};

          $steps["updateSubstituteDoctorData"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["substituteDoctorData"]
                  },
                  operation: 0
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  $stateSet(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateSubstituteDoctorData"] != null &&
            typeof $steps["updateSubstituteDoctorData"] === "object" &&
            typeof $steps["updateSubstituteDoctorData"].then === "function"
          ) {
            $steps["updateSubstituteDoctorData"] = await $steps[
              "updateSubstituteDoctorData"
            ];
          }
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "doctorCard", "sideEffect"],
  doctorCard: ["doctorCard"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  doctorCard: typeof DoctorCard;
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSubstituteDoctor__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSubstituteDoctor__VariantsArgs;
    args?: PlasmicSubstituteDoctor__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSubstituteDoctor__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSubstituteDoctor__ArgsType,
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
          internalArgPropNames: PlasmicSubstituteDoctor__ArgProps,
          internalVariantPropNames: PlasmicSubstituteDoctor__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSubstituteDoctor__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSubstituteDoctor";
  } else {
    func.displayName = `PlasmicSubstituteDoctor.${nodeName}`;
  }
  return func;
}

export const PlasmicSubstituteDoctor = Object.assign(
  // Top-level PlasmicSubstituteDoctor renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    doctorCard: makeNodeComponent("doctorCard"),
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for PlasmicSubstituteDoctor
    internalVariantProps: PlasmicSubstituteDoctor__VariantProps,
    internalArgProps: PlasmicSubstituteDoctor__ArgProps
  }
);

export default PlasmicSubstituteDoctor;
/* prettier-ignore-end */
