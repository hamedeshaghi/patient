// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMdpLWyxbzDCruwMRffW2m
// Component: GQOCScvj145-

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

import { LayoutWithHeaderAndFooter } from "@/common/components/layouts/layoutWithHeaderAndFooter"; // plasmic-import: mmczjg-nvsXL/codeComponent
import Suggestion from "../../Suggestion"; // plasmic-import: f83TZwYbQ2l0/component
import SearchFilters from "../../SearchFilters"; // plasmic-import: zLShj09Q9POm/component
import UserLocation from "../../UserLocation"; // plasmic-import: YoStZ8eQd9r-/component
import MainSearchRequest from "../../MainSearchRequest"; // plasmic-import: SctdwrC6-ku4/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: sMdpLWyxbzDCruwMRffW2m/projectcss
import sty from "./PlasmicSearchPage.module.css"; // plasmic-import: GQOCScvj145-/css

createPlasmicElementProxy;

export type PlasmicSearchPage__VariantMembers = {};
export type PlasmicSearchPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearchPage__VariantsArgs;
export const PlasmicSearchPage__VariantProps = new Array<VariantPropType>();

export type PlasmicSearchPage__ArgsType = {};
type ArgPropType = keyof PlasmicSearchPage__ArgsType;
export const PlasmicSearchPage__ArgProps = new Array<ArgPropType>();

export type PlasmicSearchPage__OverridesType = {
  root?: Flex__<"div">;
  paziresh24LayoutWithHeaderAndFooter?: Flex__<
    typeof LayoutWithHeaderAndFooter
  >;
  freeBox?: Flex__<"div">;
  suggestion?: Flex__<typeof Suggestion>;
  searchFilters?: Flex__<typeof SearchFilters>;
  userLocation?: Flex__<typeof UserLocation>;
  mainSearchRequest?: Flex__<typeof MainSearchRequest>;
  runGtmAndMetricaSideEffect?: Flex__<typeof SideEffect>;
};

export interface DefaultSearchPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSearchPage__RenderFunc(props: {
  variants: PlasmicSearchPage__VariantsArgs;
  args: PlasmicSearchPage__ArgsType;
  overrides: PlasmicSearchPage__OverridesType;
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
        path: "mainSearchRequest.apiRequestData",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "searchFilters.selected",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return typeof window === "undefined"
                ? {}
                : Object.fromEntries(
                    Array.from(
                      new window.URLSearchParams(window.location.search)
                    )
                      .filter(([k]) => k !== "text")
                      .map(([k, v]) => [k, JSON.parse(v)])
                  );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })()
      },
      {
        path: "mainSearchRequest.page",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return +($ctx?.query?.page ? $ctx?.query?.page : 1);
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 1;
              }
              throw e;
            }
          })()
      },
      {
        path: "userLocation.userCity",
        type: "private",
        variableType: "object",
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicSearchPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicSearchPage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicSearchPage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <LayoutWithHeaderAndFooter
            data-plasmic-name={"paziresh24LayoutWithHeaderAndFooter"}
            data-plasmic-override={
              overrides.paziresh24LayoutWithHeaderAndFooter
            }
            className={classNames(
              "__wab_instance",
              sty.paziresh24LayoutWithHeaderAndFooter
            )}
            compactFooter={false}
            shouldShowBrand={true}
            shouldShowPromoteApp={true}
            showBottomNavigation={true}
            showFooter={true}
            showHeader={true}
            showSearchSuggestionButton={false}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <Suggestion
                data-plasmic-name={"suggestion"}
                data-plasmic-override={overrides.suggestion}
                className={classNames("__wab_instance", sty.suggestion)}
                defaultSearchQuery={(() => {
                  try {
                    return $ctx.query.text;
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
                onSelect={async searchQuery => {
                  const $steps = {};

                  $steps["goToPage"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: (() => {
                            try {
                              return `/s/jahannama/?text=${searchQuery || ""}`;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return `/s/jahannama`;
                              }
                              throw e;
                            }
                          })()
                        };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToPage"] != null &&
                    typeof $steps["goToPage"] === "object" &&
                    typeof $steps["goToPage"].then === "function"
                  ) {
                    $steps["goToPage"] = await $steps["goToPage"];
                  }
                }}
              />

              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.searchFilters),
                  filters: (() => {
                    try {
                      return $state.mainSearchRequest.apiRequestData.entity
                        .facets;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })(),
                  onSelectedChange: async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "searchFilters",
                      "selected"
                    ]).apply(null, eventArgs);
                    (async val => {
                      const $steps = {};

                      $steps["goToPage"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: (() => {
                                try {
                                  return `/s/jahannama/?text=${
                                    $ctx.query.text
                                  }${Object.entries(
                                    $state.searchFilters.selected
                                  ).reduce((acc, item) => {
                                    acc += `&${item[0]}=${JSON.stringify(
                                      item[1]
                                    )}`;
                                    return acc;
                                  }, "")}`;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToPage"] != null &&
                        typeof $steps["goToPage"] === "object" &&
                        typeof $steps["goToPage"].then === "function"
                      ) {
                        $steps["goToPage"] = await $steps["goToPage"];
                      }
                    }).apply(null, eventArgs);
                  },
                  selected: generateStateValueProp($state, [
                    "searchFilters",
                    "selected"
                  ])
                };

                initializePlasmicStates(
                  $state,
                  [
                    {
                      name: "searchFilters.selected",
                      initFunc: ({ $props, $state, $queries }) =>
                        (() => {
                          try {
                            return typeof window === "undefined"
                              ? {}
                              : Object.fromEntries(
                                  Array.from(
                                    new window.URLSearchParams(
                                      window.location.search
                                    )
                                  )
                                    .filter(([k]) => k !== "text")
                                    .map(([k, v]) => [k, JSON.parse(v)])
                                );
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return {};
                            }
                            throw e;
                          }
                        })()
                    }
                  ],
                  []
                );
                return (
                  <SearchFilters
                    data-plasmic-name={"searchFilters"}
                    data-plasmic-override={overrides.searchFilters}
                    {...child$Props}
                  />
                );
              })()}
              <UserLocation
                data-plasmic-name={"userLocation"}
                data-plasmic-override={overrides.userLocation}
                className={classNames("__wab_instance", sty.userLocation)}
                onUserCityChange={generateStateOnChangeProp($state, [
                  "userLocation",
                  "userCity"
                ])}
              />

              {(() => {
                const child$Props = {
                  className: classNames(
                    "__wab_instance",
                    sty.mainSearchRequest
                  ),
                  onApiRequestDataChange: generateStateOnChangeProp($state, [
                    "mainSearchRequest",
                    "apiRequestData"
                  ]),
                  onPageChange: async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "mainSearchRequest",
                      "page"
                    ]).apply(null, eventArgs);
                    (async val => {
                      const $steps = {};

                      $steps["goToPage"] =
                        $state.mainSearchRequest.page > 1
                          ? (() => {
                              const actionArgs = {
                                destination: (() => {
                                  try {
                                    return `/s/jahannama/?text=${
                                      $ctx.query.text
                                    }${Object.entries(
                                      $state.searchFilters.selected
                                    ).reduce((acc, item) => {
                                      acc += `&${item[0]}=${JSON.stringify(
                                        item[1]
                                      )}`;
                                      return acc;
                                    }, "")}&page=${
                                      $state.mainSearchRequest.page
                                    }`;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()
                              };
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                      if (
                        $steps["goToPage"] != null &&
                        typeof $steps["goToPage"] === "object" &&
                        typeof $steps["goToPage"].then === "function"
                      ) {
                        $steps["goToPage"] = await $steps["goToPage"];
                      }
                    }).apply(null, eventArgs);
                  },
                  page: generateStateValueProp($state, [
                    "mainSearchRequest",
                    "page"
                  ]),
                  searchFilters: (() => {
                    try {
                      return typeof window === "undefined"
                        ? {}
                        : Object.fromEntries(
                            Array.from(
                              new window.URLSearchParams(window.location.search)
                            )
                              .filter(([k]) => k !== "text")
                              .map(([k, v]) => [k, JSON.parse(v)])
                          );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })(),
                  searchOptionalFilters: (() => {
                    try {
                      return (() => {
                        if (!$state.userLocation.userCity?.id) return;
                        return { city_id: [$state.userLocation.userCity?.id] };
                      })();
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })(),
                  searchQuery: (() => {
                    try {
                      return $ctx.query.text ? $ctx.query.text : "";
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
                };

                initializePlasmicStates(
                  $state,
                  [
                    {
                      name: "mainSearchRequest.page",
                      initFunc: ({ $props, $state, $queries }) =>
                        (() => {
                          try {
                            return +($ctx?.query?.page ? $ctx?.query?.page : 1);
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return 1;
                            }
                            throw e;
                          }
                        })()
                    }
                  ],
                  []
                );
                return (
                  <MainSearchRequest
                    data-plasmic-name={"mainSearchRequest"}
                    data-plasmic-override={overrides.mainSearchRequest}
                    {...child$Props}
                  />
                );
              })()}
            </Stack__>
          </LayoutWithHeaderAndFooter>
          <SideEffect
            data-plasmic-name={"runGtmAndMetricaSideEffect"}
            data-plasmic-override={overrides.runGtmAndMetricaSideEffect}
            className={classNames(
              "__wab_instance",
              sty.runGtmAndMetricaSideEffect
            )}
            onMount={async () => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          function loadGTM() {
                            var gtmScript = document.createElement("script");
                            gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P5RPLDP');`;
                            document.head.appendChild(gtmScript);
                            var gtmNoScript =
                              document.createElement("noscript");
                            gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5RPLDP"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
                            document.body.insertBefore(
                              gtmNoScript,
                              document.body.firstChild
                            );
                          }
                          return loadGTM();
                        })();
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

              $steps["runCode2"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          function loadMetrika() {
                            var metrikaScript =
                              document.createElement("script");
                            metrikaScript.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(98010713, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });`;
                            document.head.appendChild(metrikaScript);
                            var metrikaNoScript =
                              document.createElement("noscript");
                            metrikaNoScript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/98010713" style="position:absolute; left:-9999px;" alt="" /></div>`;
                            document.body.insertBefore(
                              metrikaNoScript,
                              document.body.firstChild
                            );
                          }
                          return loadMetrika();
                        })();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode2"] != null &&
                typeof $steps["runCode2"] === "object" &&
                typeof $steps["runCode2"].then === "function"
              ) {
                $steps["runCode2"] = await $steps["runCode2"];
              }
            }}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "paziresh24LayoutWithHeaderAndFooter",
    "freeBox",
    "suggestion",
    "searchFilters",
    "userLocation",
    "mainSearchRequest",
    "runGtmAndMetricaSideEffect"
  ],
  paziresh24LayoutWithHeaderAndFooter: [
    "paziresh24LayoutWithHeaderAndFooter",
    "freeBox",
    "suggestion",
    "searchFilters",
    "userLocation",
    "mainSearchRequest"
  ],
  freeBox: [
    "freeBox",
    "suggestion",
    "searchFilters",
    "userLocation",
    "mainSearchRequest"
  ],
  suggestion: ["suggestion"],
  searchFilters: ["searchFilters"],
  userLocation: ["userLocation"],
  mainSearchRequest: ["mainSearchRequest"],
  runGtmAndMetricaSideEffect: ["runGtmAndMetricaSideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  paziresh24LayoutWithHeaderAndFooter: typeof LayoutWithHeaderAndFooter;
  freeBox: "div";
  suggestion: typeof Suggestion;
  searchFilters: typeof SearchFilters;
  userLocation: typeof UserLocation;
  mainSearchRequest: typeof MainSearchRequest;
  runGtmAndMetricaSideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearchPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearchPage__VariantsArgs;
    args?: PlasmicSearchPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearchPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSearchPage__ArgsType,
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
          internalArgPropNames: PlasmicSearchPage__ArgProps,
          internalVariantPropNames: PlasmicSearchPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSearchPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSearchPage";
  } else {
    func.displayName = `PlasmicSearchPage.${nodeName}`;
  }
  return func;
}

export const PlasmicSearchPage = Object.assign(
  // Top-level PlasmicSearchPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    paziresh24LayoutWithHeaderAndFooter: makeNodeComponent(
      "paziresh24LayoutWithHeaderAndFooter"
    ),
    freeBox: makeNodeComponent("freeBox"),
    suggestion: makeNodeComponent("suggestion"),
    searchFilters: makeNodeComponent("searchFilters"),
    userLocation: makeNodeComponent("userLocation"),
    mainSearchRequest: makeNodeComponent("mainSearchRequest"),
    runGtmAndMetricaSideEffect: makeNodeComponent("runGtmAndMetricaSideEffect"),

    // Metadata about props expected for PlasmicSearchPage
    internalVariantProps: PlasmicSearchPage__VariantProps,
    internalArgProps: PlasmicSearchPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "موتور جستجوی پذیرش24 - جهان‌نما",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSearchPage;
/* prettier-ignore-end */
