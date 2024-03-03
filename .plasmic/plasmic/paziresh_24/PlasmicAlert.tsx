// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYgiKJB9Yi7CUB81stQBK
// Component: eDj7YOWE04_a

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

import plasmic_fragment_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: iDYgiKJB9Yi7CUB81stQBK/projectcss
import sty from "./PlasmicAlert.module.css"; // plasmic-import: eDj7YOWE04_a/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: w8HZEw2oFpPD/icon

createPlasmicElementProxy;

export type PlasmicAlert__VariantMembers = {
  noIcon: "noIcon";
  noHeader: "noHeader";
  noBody: "noBody";
};
export type PlasmicAlert__VariantsArgs = {
  noIcon?: SingleBooleanChoiceArg<"noIcon">;
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
  noBody?: SingleBooleanChoiceArg<"noBody">;
};
type VariantPropType = keyof PlasmicAlert__VariantsArgs;
export const PlasmicAlert__VariantProps = new Array<VariantPropType>(
  "noIcon",
  "noHeader",
  "noBody"
);

export type PlasmicAlert__ArgsType = {
  icon?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAlert__ArgsType;
export const PlasmicAlert__ArgProps = new Array<ArgPropType>(
  "icon",
  "header",
  "body"
);

export type PlasmicAlert__OverridesType = {
  root?: Flex__<"div">;
  h6?: Flex__<"h6">;
};

export interface DefaultAlertProps {
  icon?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
  noIcon?: SingleBooleanChoiceArg<"noIcon">;
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
  noBody?: SingleBooleanChoiceArg<"noBody">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAlert__RenderFunc(props: {
  variants: PlasmicAlert__VariantsArgs;
  args: PlasmicAlert__ArgsType;
  overrides: PlasmicAlert__OverridesType;
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
        path: "noIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noIcon
      },
      {
        path: "noHeader",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noHeader
      },
      {
        path: "noBody",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noBody
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
        sty.root,
        { [sty.rootnoBody]: hasVariant($state, "noBody", "noBody") }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___1Xids, {
          [sty.freeBoxnoBody___1XidsYiyGn]: hasVariant(
            $state,
            "noBody",
            "noBody"
          ),
          [sty.freeBoxnoHeader___1XidspAz4B]: hasVariant(
            $state,
            "noHeader",
            "noHeader"
          ),
          [sty.freeBoxnoIcon___1Xids2Nnn0]: hasVariant(
            $state,
            "noIcon",
            "noIcon"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__gw48U, {
            [sty.freeBoxnoIcon__gw48U2Nnn0]: hasVariant(
              $state,
              "noIcon",
              "noIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Icon8Icon
                className={classNames(projectcss.all, sty.svg__vYo8J)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___7Jk6C, {
            [sty.freeBoxnoHeader___7Jk6CpAz4B]: hasVariant(
              $state,
              "noHeader",
              "noHeader"
            ),
            [sty.freeBoxnoIcon___7Jk6C2Nnn0]: hasVariant(
              $state,
              "noIcon",
              "noIcon"
            )
          })}
        >
          <h6
            data-plasmic-name={"h6"}
            data-plasmic-override={overrides.h6}
            className={classNames(projectcss.all, projectcss.h6, sty.h6, {
              [sty.h6noHeader]: hasVariant($state, "noHeader", "noHeader"),
              [sty.h6noIcon]: hasVariant($state, "noIcon", "noIcon")
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Heads up!",
              value: args.header
            })}
          </h6>
          <div
            className={classNames(projectcss.all, sty.freeBox__s5Gvy, {
              [sty.freeBoxnoBody__s5GvyYiyGn]: hasVariant(
                $state,
                "noBody",
                "noBody"
              ),
              [sty.freeBoxnoHeader__s5GvYpAz4B]: hasVariant(
                $state,
                "noHeader",
                "noHeader"
              )
            })}
          >
            {renderPlasmicSlot({
              defaultContents:
                "Here is the body text description for the alert!",
              value: args.body
            })}
          </div>
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h6"],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAlert__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAlert__VariantsArgs;
    args?: PlasmicAlert__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAlert__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAlert__ArgsType,
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
          internalArgPropNames: PlasmicAlert__ArgProps,
          internalVariantPropNames: PlasmicAlert__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAlert__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAlert";
  } else {
    func.displayName = `PlasmicAlert.${nodeName}`;
  }
  return func;
}

export const PlasmicAlert = Object.assign(
  // Top-level PlasmicAlert renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicAlert
    internalVariantProps: PlasmicAlert__VariantProps,
    internalArgProps: PlasmicAlert__ArgProps
  }
);

export default PlasmicAlert;
/* prettier-ignore-end */
