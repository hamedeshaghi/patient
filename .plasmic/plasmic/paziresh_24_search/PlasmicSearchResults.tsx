// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMdpLWyxbzDCruwMRffW2m
// Component: XhSI4pxMLR3L

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

import ProductCard from "../../ProductCard"; // plasmic-import: ZuA2HO8MLBhh/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMdpLWyxbzDCruwMRffW2m/projectcss
import sty from "./PlasmicSearchResults.module.css"; // plasmic-import: XhSI4pxMLR3L/css

import ChevronRightIcon from "../paziresh_24_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../paziresh_24_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

import __fn_splunkEvent from "@/common/services/plasmicSplunkEvent"; // plasmic-import: splunkEvent/customFunction

createPlasmicElementProxy;

export type PlasmicSearchResults__VariantMembers = {};
export type PlasmicSearchResults__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearchResults__VariantsArgs;
export const PlasmicSearchResults__VariantProps = new Array<VariantPropType>();

export type PlasmicSearchResults__ArgsType = {
  searchResultResponse?: any;
  imageSrcPrefix?: string;
  nextPageTrigger?: () => void;
  paginationLoadingStatus?: boolean;
  location?: any;
};
type ArgPropType = keyof PlasmicSearchResults__ArgsType;
export const PlasmicSearchResults__ArgProps = new Array<ArgPropType>(
  "searchResultResponse",
  "imageSrcPrefix",
  "nextPageTrigger",
  "paginationLoadingStatus",
  "location"
);

export type PlasmicSearchResults__OverridesType = {
  root?: Flex__<"div">;
  productCard?: Flex__<typeof ProductCard>;
  button?: Flex__<typeof Button>;
};

export interface DefaultSearchResultsProps {
  searchResultResponse?: any;
  imageSrcPrefix?: string;
  nextPageTrigger?: () => void;
  paginationLoadingStatus?: boolean;
  location?: any;
  className?: string;
}

const $$ = {
  splunkEvent: __fn_splunkEvent
};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSearchResults__RenderFunc(props: {
  variants: PlasmicSearchResults__VariantsArgs;
  args: PlasmicSearchResults__ArgsType;
  overrides: PlasmicSearchResults__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          paginationLoadingStatus: false
        },
        props.args
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

  const currentUser = useCurrentUser?.() || {};

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
        plasmic_paziresh_24_design_system_css.plasmic_tokens,
        sty.root
      )}
    >
      {(() => {
        try {
          return $props.searchResultResponse.search.result.length !== 0;
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
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__k8Dm8)}
        >
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $props.searchResultResponse.search.result;
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
              <ProductCard
                data-plasmic-name={"productCard"}
                data-plasmic-override={overrides.productCard}
                actionButtons={(() => {
                  try {
                    return currentItem.actions;
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
                address={(() => {
                  try {
                    return currentItem.display_address;
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
                avatarAltText={(() => {
                  try {
                    return `${currentItem.prefix} ${currentItem.title} ${currentItem.display_expertise}`;
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
                avatarRingColor={(() => {
                  try {
                    return currentItem.is_bulk !== true ? "blue" : undefined;
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
                avatarSrc={`${$props.imageSrcPrefix}${currentItem.image}`}
                avatarVerifiedTick={(() => {
                  try {
                    return !currentItem.is_bulk;
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
                badges={(() => {
                  try {
                    return currentItem.badges;
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
                className={classNames("__wab_instance", sty.productCard)}
                eventTrigger={async (elementName, elementContent) => {
                  const $steps = {};

                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return $$.splunkEvent({
                              token: "7c4a4dbb-0abc-4d1f-8e65-fbd7e52debbd",
                              group: "search_metrics",
                              type: "search_click_position",
                              data: {
                                card_data: {
                                  action: currentItem.actions?.map?.(item =>
                                    JSON.stringify({
                                      outline: item.outline,
                                      title: item.title,
                                      top_title: item.top_title.replace(
                                        /(<([^>]+)>)/gi,
                                        ""
                                      )
                                    })
                                  ),
                                  _id: currentItem._id,
                                  position: currentItem.position,
                                  server_id: currentItem.server_id,
                                  title: currentItem.title,
                                  type: currentItem.type,
                                  url: currentItem.url,
                                  rates_count: currentItem.rates_count,
                                  satisfaction: currentItem.satisfaction
                                },
                                filters:
                                  $props.searchResultResponse.selected_filters,
                                result_count: $props.searchResultResponse.lent,
                                location: $props.location.city_name,
                                city_id: $props.location.city_id,
                                lat: $props.location.lat,
                                lon: $props.location.lon,
                                query_id:
                                  $props.searchResultResponse.search.query_id
                              }
                            });
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }
                }}
                key={currentIndex}
                price={(() => {
                  try {
                    return currentItem.price;
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
                rateCount={(() => {
                  try {
                    return currentItem.rates_count;
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
                satisfactionPercent={(() => {
                  try {
                    return currentItem.satisfaction;
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
                subTitle={(() => {
                  try {
                    return currentItem.display_expertise;
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
                title={(() => {
                  try {
                    return currentItem.title;
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
                url={(() => {
                  try {
                    return {
                      destination: currentItem.url,
                      title: `${currentItem.prefix} ${currentItem.title} ${currentItem.display_expertise}`
                    };
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
            );
          })}
        </Stack__>
      ) : null}
      {(() => {
        try {
          return (
            $props.searchResultResponse.search.pagination.limit *
              $props.searchResultResponse.search.pagination.page <
            $props.searchResultResponse.search.total
          );
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return false;
          }
          throw e;
        }
      })() ? (
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          children2={
            "\u0646\u0645\u0627\u06cc\u0634 \u0646\u062a\u0627\u06cc\u062c \u0628\u06cc\u0634\u062a\u0631 ..."
          }
          className={classNames("__wab_instance", sty.button)}
          loading={(() => {
            try {
              return $props.paginationLoadingStatus;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()}
          onClick={async event => {
            const $steps = {};

            $steps["runNextPageTrigger"] = true
              ? (() => {
                  const actionArgs = { eventRef: $props["nextPageTrigger"] };
                  return (({ eventRef, args }) => {
                    return eventRef?.(...(args ?? []));
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["runNextPageTrigger"] != null &&
              typeof $steps["runNextPageTrigger"] === "object" &&
              typeof $steps["runNextPageTrigger"].then === "function"
            ) {
              $steps["runNextPageTrigger"] = await $steps["runNextPageTrigger"];
            }

            $steps["updateStateVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateStateVariable"] != null &&
              typeof $steps["updateStateVariable"] === "object" &&
              typeof $steps["updateStateVariable"].then === "function"
            ) {
              $steps["updateStateVariable"] = await $steps[
                "updateStateVariable"
              ];
            }
          }}
          outline={true}
        />
      ) : null}
      {(() => {
        try {
          return $props.searchResultResponse.search.result.length === 0;
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
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__aZJcA)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__psRc
            )}
          >
            {
              "\u0646\u062a\u06cc\u062c\u0647 \u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u062c\u0633\u062a\u062c\u0648\u06cc \u0634\u0645\u0627 \u067e\u06cc\u062f\u0627 \u0646\u06a9\u0631\u062f\u06cc\u0645."
            }
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fjxY
            )}
          >
            {
              "\u062c\u0633\u062a\u062c\u0648\u06cc \u062e\u0648\u062f \u0631\u0627 \u0628\u0647\u062a\u0631 \u06a9\u0646\u06cc\u062f:"
            }
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bUp8Z
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <ul
                  className={classNames(
                    projectcss.all,
                    projectcss.ul,
                    sty.ul__u9LlH
                  )}
                >
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__oRdjU
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <Stack__
                          as={"ul"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul__qa1Fo
                          )}
                        >
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__tpsj
                            )}
                          >
                            {
                              "\u0627\u0632 \u062c\u0633\u062a\u062c\u0648\u06cc \u067e\u06cc\u0634\u0631\u0641\u062a\u0647 \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0648 \u0641\u06cc\u0644\u062a\u0631 \u0628\u0647\u062a\u0631\u06cc\u0646 \u062f\u0631\u0645\u0627\u0646\u06af\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."
                            }
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__vuykb
                            )}
                          >
                            {
                              "\u0627\u0632 \u0635\u062d\u062a \u0646\u0627\u0645 \u062a\u062e\u0635\u0635\u060c \u0628\u06cc\u0645\u0627\u0631\u06cc\u060c \u067e\u0632\u0634\u06a9 \u06cc\u0627 \u0645\u0631\u06a9\u0632 \u062f\u0631\u0645\u0627\u0646\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f."
                            }
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__cRrw4
                            )}
                          >
                            {
                              "\u06a9\u0644\u0645\u0627\u062a \u0645\u062a\u0641\u0627\u0648\u062a\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f."
                            }
                          </li>
                        </Stack__>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </li>
                </ul>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </Stack__>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "productCard", "button"],
  productCard: ["productCard"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  productCard: typeof ProductCard;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearchResults__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearchResults__VariantsArgs;
    args?: PlasmicSearchResults__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearchResults__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSearchResults__ArgsType,
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
          internalArgPropNames: PlasmicSearchResults__ArgProps,
          internalVariantPropNames: PlasmicSearchResults__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSearchResults__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchResults";
  } else {
    func.displayName = `PlasmicSearchResults.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchResults = Object.assign(
  // Top-level PlasmicSearchResults renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productCard: makeNodeComponent("productCard"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSearchResults
    internalVariantProps: PlasmicSearchResults__VariantProps,
    internalArgProps: PlasmicSearchResults__ArgProps
  }
);

export default PlasmicSearchResults;
/* prettier-ignore-end */
