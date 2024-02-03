// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYgiKJB9Yi7CUB81stQBK
// Component: 3_YM1K_ShdiP

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

import Avatar from "../../Avatar"; // plasmic-import: AkEj38NruNNA/component
import Dialog from "../../Dialog"; // plasmic-import: 5NUpgw2K0nJD/component
import ReplyCard from "../../ReplyCard"; // plasmic-import: W_h5HWBjSAiK/component
import Button from "../../Button"; // plasmic-import: wRtWBmTexyYF/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_paziresh_24.module.css"; // plasmic-import: iDYgiKJB9Yi7CUB81stQBK/projectcss
import sty from "./PlasmicReviewCard.module.css"; // plasmic-import: 3_YM1K_ShdiP/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: Z5JVHYJlHhEy/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: p4tVEsplySFb/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: xWGtBmgD-AZH/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: zxD5K_Hf3kNg/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: je9zsyvTNz9E/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: zsOosa-1VDPP/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Zop7nqClMso8/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: UYWDQf69XzlE/icon

createPlasmicElementProxy;

export type PlasmicReviewCard__VariantMembers = {};
export type PlasmicReviewCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicReviewCard__VariantsArgs;
export const PlasmicReviewCard__VariantProps = new Array<VariantPropType>();

export type PlasmicReviewCard__ArgsType = {
  name?: string;
  avatar?: string;
  description?: string;
  userId?: string;
  details?: any;
  id?: string;
  tag?: any;
  sort?: (value: string) => void;
  reply?: any;
};
type ArgPropType = keyof PlasmicReviewCard__ArgsType;
export const PlasmicReviewCard__ArgProps = new Array<ArgPropType>(
  "name",
  "avatar",
  "description",
  "userId",
  "details",
  "id",
  "tag",
  "sort",
  "reply"
);

export type PlasmicReviewCard__OverridesType = {
  root?: Flex__<"div">;
  avatar?: Flex__<typeof Avatar>;
  dialog2?: Flex__<typeof Dialog>;
  replyCard?: Flex__<typeof ReplyCard>;
  dialog?: Flex__<typeof Dialog>;
  textarea2?: Flex__<"textarea">;
  button?: Flex__<typeof Button>;
  textarea?: Flex__<"textarea">;
};

export interface DefaultReviewCardProps {
  name?: string;
  avatar?: string;
  description?: string;
  userId?: string;
  details?: any;
  id?: string;
  tag?: any;
  sort?: (value: string) => void;
  reply?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReviewCard__RenderFunc(props: {
  variants: PlasmicReviewCard__VariantsArgs;
  args: PlasmicReviewCard__ArgsType;
  overrides: PlasmicReviewCard__OverridesType;
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
        path: "textarea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "textarea2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "isLiked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "isMenuOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "dialog2.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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
        sty.root
      )}
      dir={"rtl"}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___5ASf)}
      >
        <Avatar
          data-plasmic-name={"avatar"}
          data-plasmic-override={overrides.avatar}
          className={classNames("__wab_instance", sty.avatar)}
          name={(() => {
            try {
              return $props.name;
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
              return $props.avatar;
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

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__h8D5K)}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {
                    destination: (() => {
                      try {
                        return `/ravi/${$props.userId}`;
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
        >
          <div className={classNames(projectcss.all, sty.freeBox__bf7Dl)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0IrCi
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $props.tag;
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
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xVlcf
                  )}
                  key={currentIndex}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return currentItem.name;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "\u0648\u06cc\u0632\u06cc\u062a \u0634\u062f\u0647";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              );
            })}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ptp35
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.details.join(" | ");
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
        <Icon10Icon
          className={classNames(projectcss.all, sty.svg__tkbmg)}
          onClick={async event => {
            const $steps = {};

            $steps["updateIsMenuOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["isMenuOpen"]
                    },
                    operation: 4
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    const oldValue = $stateGet(objRoot, variablePath);
                    $stateSet(objRoot, variablePath, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateIsMenuOpen"] != null &&
              typeof $steps["updateIsMenuOpen"] === "object" &&
              typeof $steps["updateIsMenuOpen"].then === "function"
            ) {
              $steps["updateIsMenuOpen"] = await $steps["updateIsMenuOpen"];
            }
          }}
          role={"img"}
        />
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__kWPx)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qcEpf
          )}
        >
          {
            "\u067e\u0632\u0634\u06a9 \u0631\u0627 \u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u06a9\u0646\u0645"
          }
        </div>
        <Icon5Icon
          className={classNames(projectcss.all, sty.svg__ua1So)}
          role={"img"}
        />
      </Stack__>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__zqYtl
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.description;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__tekJo)}
      >
        {(() => {
          try {
            return $props.reply.length > 0;
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
          <Dialog
            data-plasmic-name={"dialog2"}
            data-plasmic-override={overrides.dialog2}
            body={
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gF5Sf)}
              >
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $props.reply;
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
                    <ReplyCard
                      data-plasmic-name={"replyCard"}
                      data-plasmic-override={overrides.replyCard}
                      className={classNames("__wab_instance", sty.replyCard)}
                      description={(() => {
                        try {
                          return currentItem.description;
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
                      key={currentIndex}
                    />
                  );
                })}
              </Stack__>
            }
            className={classNames("__wab_instance", sty.dialog2)}
            onOpenChange={generateStateOnChangeProp($state, [
              "dialog2",
              "open"
            ])}
            open={generateStateValueProp($state, ["dialog2", "open"])}
            title={null}
            trigger={
              <div className={classNames(projectcss.all, sty.freeBox__wx0Nc)}>
                <Icon12Icon
                  className={classNames(projectcss.all, sty.svg__whSrH)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1JqTq
                  )}
                >
                  {
                    "\u0646\u0645\u0627\u06cc\u0634 \u067e\u0627\u0633\u062e \u0647\u0627"
                  }
                </div>
              </div>
            }
          />
        ) : null}
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hxIlq)}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__o0XSq)}
            onClick={async event => {
              const $steps = {};

              $steps["updateIsLiked"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["isLiked"]
                      },
                      operation: 4
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      const oldValue = $stateGet(objRoot, variablePath);
                      $stateSet(objRoot, variablePath, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateIsLiked"] != null &&
                typeof $steps["updateIsLiked"] === "object" &&
                typeof $steps["updateIsLiked"].then === "function"
              ) {
                $steps["updateIsLiked"] = await $steps["updateIsLiked"];
              }

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (() => {
                          const formData = new FormData();
                          formData.append("feedback_id", $props.id);
                          return fetch(
                            "https://www.paziresh24.com/api/likeOrDislikeFeedback/",
                            {
                              method: "POST",
                              credentials: "include",
                              body: formData
                            }
                          );
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
            }}
          >
            {(() => {
              try {
                return !$state.isLiked;
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
              <Icon3Icon
                className={classNames(projectcss.all, sty.svg__lcWKt)}
                role={"img"}
              />
            ) : null}
            {(() => {
              try {
                return $state.isLiked;
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
              <Icon7Icon
                className={classNames(projectcss.all, sty.svg___60ND)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fP1YP
              )}
            >
              {"\u067e\u0633\u0646\u062f\u06cc\u062f\u0646"}
            </div>
          </div>
          <Dialog
            data-plasmic-name={"dialog"}
            data-plasmic-override={overrides.dialog}
            body={
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rfx6L)}
              >
                <textarea
                  data-plasmic-name={"textarea2"}
                  data-plasmic-override={overrides.textarea2}
                  className={classNames(
                    projectcss.all,
                    projectcss.textarea,
                    sty.textarea2
                  )}
                  onChange={e => {
                    generateStateOnChangeProp($state, ["textarea2", "value"])(
                      e.target.value
                    );
                  }}
                  placeholder={
                    "\u0644\u0637\u0641\u0627 \u0639\u0644\u062a \u0648 \u0634\u0631\u062d \u06af\u0632\u0627\u0631\u0634 \u0646\u0638\u0631 \u0627\u06cc\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0627\u0639\u0644\u0627\u0645 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u062a\u06cc\u0645 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u067e\u0630\u06cc\u0631\u063424 \u0628\u0631 \u0627\u0633\u0627\u0633 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0634\u0645\u0627\u060c \u0646\u0638\u0631 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0645\u062c\u062f\u062f\u0627 \u0628\u0631\u0631\u0633\u06cc \u0646\u0645\u0627\u06cc\u062f."
                  }
                  ref={ref => {
                    $refs["textarea2"] = ref;
                  }}
                  value={
                    generateStateValueProp($state, ["textarea2", "value"]) ?? ""
                  }
                />

                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["httpPost"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return fetch(
                                "https://apigw.paziresh24.com/v1/feedbacks/report/",
                                {
                                  method: "POST",
                                  body: JSON.stringify({
                                    feedback_id: $props.id
                                  }),
                                  credentials: "include",
                                  headers: {
                                    "content-type": "application/json"
                                  }
                                }
                              );
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["httpPost"] != null &&
                      typeof $steps["httpPost"] === "object" &&
                      typeof $steps["httpPost"].then === "function"
                    ) {
                      $steps["httpPost"] = await $steps["httpPost"];
                    }

                    $steps["updateDialogOpen"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["dialog", "open"]
                            },
                            operation: 0,
                            value: false
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
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
                      $steps["updateDialogOpen"] != null &&
                      typeof $steps["updateDialogOpen"] === "object" &&
                      typeof $steps["updateDialogOpen"].then === "function"
                    ) {
                      $steps["updateDialogOpen"] = await $steps[
                        "updateDialogOpen"
                      ];
                    }
                  }}
                >
                  {
                    "\u0627\u0631\u0633\u0627\u0644 \u06af\u0632\u0627\u0631\u0634"
                  }
                </Button>
              </Stack__>
            }
            className={classNames("__wab_instance", sty.dialog)}
            onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
            open={generateStateValueProp($state, ["dialog", "open"])}
            title={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n8Yq2
                )}
              >
                {"\u06af\u0632\u0627\u0631\u0634 \u0646\u0638\u0631"}
              </div>
            }
            trigger={
              <div className={classNames(projectcss.all, sty.freeBox__vt9Wb)}>
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__oRr2H)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wmhmi
                  )}
                >
                  {"\u06af\u0632\u0627\u0631\u0634"}
                </div>
              </div>
            }
          />
        </Stack__>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__ebbBv)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___7GoRv
          )}
        >
          {"\u0627\u0631\u0633\u0627\u0644"}
        </div>
        <textarea
          data-plasmic-name={"textarea"}
          data-plasmic-override={overrides.textarea}
          className={classNames(
            projectcss.all,
            projectcss.textarea,
            sty.textarea
          )}
          onChange={e => {
            generateStateOnChangeProp($state, ["textarea", "value"])(
              e.target.value
            );
          }}
          placeholder={
            "\u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f..."
          }
          ref={ref => {
            $refs["textarea"] = ref;
          }}
          value={generateStateValueProp($state, ["textarea", "value"]) ?? ""}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "avatar",
    "dialog2",
    "replyCard",
    "dialog",
    "textarea2",
    "button",
    "textarea"
  ],
  avatar: ["avatar"],
  dialog2: ["dialog2", "replyCard"],
  replyCard: ["replyCard"],
  dialog: ["dialog", "textarea2", "button"],
  textarea2: ["textarea2"],
  button: ["button"],
  textarea: ["textarea"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  dialog2: typeof Dialog;
  replyCard: typeof ReplyCard;
  dialog: typeof Dialog;
  textarea2: "textarea";
  button: typeof Button;
  textarea: "textarea";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReviewCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReviewCard__VariantsArgs;
    args?: PlasmicReviewCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReviewCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReviewCard__ArgsType,
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
          internalArgPropNames: PlasmicReviewCard__ArgProps,
          internalVariantPropNames: PlasmicReviewCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReviewCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReviewCard";
  } else {
    func.displayName = `PlasmicReviewCard.${nodeName}`;
  }
  return func;
}

export const PlasmicReviewCard = Object.assign(
  // Top-level PlasmicReviewCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    dialog2: makeNodeComponent("dialog2"),
    replyCard: makeNodeComponent("replyCard"),
    dialog: makeNodeComponent("dialog"),
    textarea2: makeNodeComponent("textarea2"),
    button: makeNodeComponent("button"),
    textarea: makeNodeComponent("textarea"),

    // Metadata about props expected for PlasmicReviewCard
    internalVariantProps: PlasmicReviewCard__VariantProps,
    internalArgProps: PlasmicReviewCard__ArgProps
  }
);

export default PlasmicReviewCard;
/* prettier-ignore-end */
