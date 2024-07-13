// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qQzsBf58SqzNJX45iggq96
// Component: qY29Y1sogsUa

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

import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import Avatar from "../../Avatar"; // plasmic-import: 3i84rYjQRrs4/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qQzsBf58SqzNJX45iggq96/projectcss
import sty from "./PlasmicReplyCard.module.css"; // plasmic-import: qY29Y1sogsUa/css

createPlasmicElementProxy;

export type PlasmicReplyCard__VariantMembers = {};
export type PlasmicReplyCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicReplyCard__VariantsArgs;
export const PlasmicReplyCard__VariantProps = new Array<VariantPropType>();

export type PlasmicReplyCard__ArgsType = {
  replyText?: string;
  userId?: number;
};
type ArgPropType = keyof PlasmicReplyCard__ArgsType;
export const PlasmicReplyCard__ArgProps = new Array<ArgPropType>(
  "replyText",
  "userId"
);

export type PlasmicReplyCard__OverridesType = {
  root?: Flex__<"div">;
  ناماربر?: Flex__<typeof DataFetcher>;
  نامتتارخ?: Flex__<"div">;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  userAvatar2?: Flex__<typeof Avatar>;
  userAvatar?: Flex__<typeof Avatar>;
};

export interface DefaultReplyCardProps {
  replyText?: string;
  userId?: number;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReplyCard__RenderFunc(props: {
  variants: PlasmicReplyCard__VariantsArgs;
  args: PlasmicReplyCard__ArgsType;
  overrides: PlasmicReplyCard__OverridesType;
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
      dir={"rtl"}
    >
      <DataFetcher
        data-plasmic-name={"\u0646\u0627\u0645\u0627\u0631\u0628\u0631"}
        data-plasmic-override={overrides.ناماربر}
        className={classNames("__wab_instance", sty.ناماربر)}
        dataName={"fetchedData"}
        errorDisplay={null}
        errorName={"fetchError"}
        headers={{
          "Content-Type": "application/json",
          Accept: "application/json"
        }}
        loadingDisplay={null}
        method={"GET"}
        noLayout={false}
        url={(() => {
          try {
            return `https://apigw.paziresh24.com/v1/users/${$props.userId}`;
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
        <DataCtxReader__>
          {$ctx => (
            <div
              data-plasmic-name={
                "\u0646\u0627\u0645\u062a\u062a\u0627\u0631\u062e"
              }
              data-plasmic-override={overrides.نامتتارخ}
              className={classNames(projectcss.all, sty.نامتتارخ)}
            >
              <DataFetcher
                data-plasmic-name={"httpRestApiFetcher"}
                data-plasmic-override={overrides.httpRestApiFetcher}
                className={classNames("__wab_instance", sty.httpRestApiFetcher)}
                dataName={"avatarfetchedData"}
                errorDisplay={
                  <DataCtxReader__>
                    {$ctx => "Error fetching data"}
                  </DataCtxReader__>
                }
                errorName={"fetchError"}
                headers={{
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }}
                loadingDisplay={
                  <DataCtxReader__>
                    {$ctx => (
                      <Avatar
                        data-plasmic-name={"userAvatar2"}
                        data-plasmic-override={overrides.userAvatar2}
                        className={classNames(
                          "__wab_instance",
                          sty.userAvatar2
                        )}
                        name={(() => {
                          try {
                            return $ctx.fetchedData.users[0].name;
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
                        src={``}
                      />
                    )}
                  </DataCtxReader__>
                }
                method={"GET"}
                noLayout={false}
                previewSpinner={false}
                url={(() => {
                  try {
                    return `https://apigw.paziresh24.com/v1/users/image?user_id=${$props.userId}`;
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
                <DataCtxReader__>
                  {$ctx => (
                    <Avatar
                      data-plasmic-name={"userAvatar"}
                      data-plasmic-override={overrides.userAvatar}
                      className={classNames("__wab_instance", sty.userAvatar)}
                      name={(() => {
                        try {
                          return $ctx.fetchedData.users[0].name;
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
                      src={(() => {
                        try {
                          return $ctx.avatarfetchedData.data.image_url;
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
                  )}
                </DataCtxReader__>
              </DataFetcher>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dbIvm)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rie2S)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kgt4O
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $props.userName;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u0622\u0646\u0627\u0647\u06cc\u062a\u0627 \u0645\u0646\u0635\u0648\u0631\u06cc";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8TwVb
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return (
                            $ctx.fetchedData.users[0].name || "کاربر بدون نام"
                          );
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "\u0622\u0646\u0627\u0647\u06cc\u062a\u0627 \u0645\u0646\u0635\u0648\u0631\u06cc";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                </Stack__>
              </Stack__>
            </div>
          )}
        </DataCtxReader__>
      </DataFetcher>
      <div className={classNames(projectcss.all, sty.freeBox__pxmoa)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zendm
          )}
        >
          <div
            className={projectcss.__wab_expr_html_text}
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  return $props.replyText;
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
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "\u0646\u0627\u0645\u0627\u0631\u0628\u0631",
    "\u0646\u0627\u0645\u062a\u062a\u0627\u0631\u062e",
    "httpRestApiFetcher",
    "userAvatar2",
    "userAvatar"
  ],
  ناماربر: [
    "\u0646\u0627\u0645\u0627\u0631\u0628\u0631",
    "\u0646\u0627\u0645\u062a\u062a\u0627\u0631\u062e",
    "httpRestApiFetcher",
    "userAvatar2",
    "userAvatar"
  ],
  نامتتارخ: [
    "\u0646\u0627\u0645\u062a\u062a\u0627\u0631\u062e",
    "httpRestApiFetcher",
    "userAvatar2",
    "userAvatar"
  ],
  httpRestApiFetcher: ["httpRestApiFetcher", "userAvatar2", "userAvatar"],
  userAvatar2: ["userAvatar2"],
  userAvatar: ["userAvatar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  ناماربر: typeof DataFetcher;
  نامتتارخ: "div";
  httpRestApiFetcher: typeof DataFetcher;
  userAvatar2: typeof Avatar;
  userAvatar: typeof Avatar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReplyCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReplyCard__VariantsArgs;
    args?: PlasmicReplyCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReplyCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReplyCard__ArgsType,
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
          internalArgPropNames: PlasmicReplyCard__ArgProps,
          internalVariantPropNames: PlasmicReplyCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReplyCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReplyCard";
  } else {
    func.displayName = `PlasmicReplyCard.${nodeName}`;
  }
  return func;
}

export const PlasmicReplyCard = Object.assign(
  // Top-level PlasmicReplyCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ناماربر: makeNodeComponent("\u0646\u0627\u0645\u0627\u0631\u0628\u0631"),
    نامتتارخ: makeNodeComponent(
      "\u0646\u0627\u0645\u062a\u062a\u0627\u0631\u062e"
    ),
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    userAvatar2: makeNodeComponent("userAvatar2"),
    userAvatar: makeNodeComponent("userAvatar"),

    // Metadata about props expected for PlasmicReplyCard
    internalVariantProps: PlasmicReplyCard__VariantProps,
    internalArgProps: PlasmicReplyCard__ArgProps
  }
);

export default PlasmicReplyCard;
/* prettier-ignore-end */
