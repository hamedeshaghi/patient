// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYgiKJB9Yi7CUB81stQBK
// Component: q3FGMz6XNu9L

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

import Button from "../../Button"; // plasmic-import: wRtWBmTexyYF/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_paziresh_24.module.css"; // plasmic-import: iDYgiKJB9Yi7CUB81stQBK/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: q3FGMz6XNu9L/css

import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: -KwzHfv-9ot5/icon
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: 0nIlGiQv_m-P/icon
import EitaasvgIcon from "./icons/PlasmicIcon__Eitaasvg"; // plasmic-import: WqDEZH1sW0Ay/icon
import WhatsappsvgIcon from "./icons/PlasmicIcon__Whatsappsvg"; // plasmic-import: aiEdwD29mrY6/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Zop7nqClMso8/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: UYWDQf69XzlE/icon
import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: bFoMwbPekE8y/icon

createPlasmicElementProxy;

export type PlasmicServices__VariantMembers = {
  type: "onlineVisit";
};
export type PlasmicServices__VariantsArgs = {
  type?: SingleChoiceArg<"onlineVisit">;
};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>("type");

export type PlasmicServices__ArgsType = {
  information?: any;
  service?: any;
  onlineVisit?: any;
  waitingTimeInfo?: any;
  expertises?: any;
  seo?: any;
};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>(
  "information",
  "service",
  "onlineVisit",
  "waitingTimeInfo",
  "expertises",
  "seo"
);

export type PlasmicServices__OverridesType = {
  root?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultServicesProps {
  information?: any;
  service?: any;
  onlineVisit?: any;
  waitingTimeInfo?: any;
  expertises?: any;
  seo?: any;
  type?: SingleChoiceArg<"onlineVisit">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
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
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
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
        sty.root,
        {
          [sty.roottype_onlineVisit]: hasVariant($state, "type", "onlineVisit")
        }
      )}
      dir={"rtl"}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___4HQKm, {
          [sty.freeBoxtype_onlineVisit___4HQKm7QAlK]: hasVariant(
            $state,
            "type",
            "onlineVisit"
          )
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___2Q2QS)}
        >
          <PlasmicIcon__
            PlasmicIconType={
              hasVariant($state, "type", "onlineVisit")
                ? Icon23Icon
                : Icon22Icon
            }
            className={classNames(projectcss.all, sty.svg__p66RR, {
              [sty.svgtype_onlineVisit__p66RR7QAlK]: hasVariant(
                $state,
                "type",
                "onlineVisit"
              )
            })}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ue5AT,
              {
                [sty.texttype_onlineVisit__ue5AT7QAlK]: hasVariant(
                  $state,
                  "type",
                  "onlineVisit"
                )
              }
            )}
          >
            {hasVariant($state, "type", "onlineVisit")
              ? "\u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646 \u0622\u0646\u0644\u0627\u06cc\u0646 \u0648\u06cc\u0632\u06cc\u062a \u0634\u0648\u06cc\u062f"
              : "\u0646\u0648\u0628\u062a \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc \u0648 \u0645\u0631\u0627\u062c\u0639\u0647 \u062d\u0636\u0648\u0631\u06cc"}
          </div>
        </Stack__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uOdnm,
            {
              [sty.texttype_onlineVisit__uOdnm7QAlK]: hasVariant(
                $state,
                "type",
                "onlineVisit"
              )
            }
          )}
        >
          {hasVariant($state, "type", "onlineVisit") ? (
            <React.Fragment>
              {(() => {
                try {
                  return `${(
                    $props.service.free_price / 10
                  ).toLocaleString()} تومان`;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "-\u062a\u0648\u0645\u0627\u0646";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          ) : (
            "130,000 \u062a\u0648\u0645\u0627\u0646"
          )}
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__xv7Yc, {
          [sty.freeBoxtype_onlineVisit__xv7Yc7QAlK]: hasVariant(
            $state,
            "type",
            "onlineVisit"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__qgc4H, {
            [sty.freeBoxtype_onlineVisit__qgc4H7QAlK]: hasVariant(
              $state,
              "type",
              "onlineVisit"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox___4HUOp, {
              [sty.freeBoxtype_onlineVisit___4HUOp7QAlK]: hasVariant(
                $state,
                "type",
                "onlineVisit"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ynPq,
                {
                  [sty.texttype_onlineVisit__ynPq7QAlK]: hasVariant(
                    $state,
                    "type",
                    "onlineVisit"
                  )
                }
              )}
            >
              {hasVariant($state, "type", "onlineVisit")
                ? "\u0648\u06cc\u0632\u06cc\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u062f\u0631 \u067e\u06cc\u0627\u0645 \u0631\u0633\u0627\u0646:"
                : "\u0627\u0645\u06a9\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u0632\u0648\u062f\u062a\u0631\u06cc\u0646 \u0646\u0648\u0628\u062a"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vlbHa, {
                [sty.freeBoxtype_onlineVisit__vlbHa7QAlK]: hasVariant(
                  $state,
                  "type",
                  "onlineVisit"
                )
              })}
            >
              {(
                hasVariant($state, "type", "onlineVisit")
                  ? (() => {
                      try {
                        return $props.onlineVisit.channels.includes("eitaa");
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return true;
                        }
                        throw e;
                      }
                    })()
                  : true
              ) ? (
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lnM1, {
                    [sty.freeBoxtype_onlineVisit__lnM17QAlK]: hasVariant(
                      $state,
                      "type",
                      "onlineVisit"
                    )
                  })}
                >
                  <EitaasvgIcon
                    className={classNames(projectcss.all, sty.svg__lpwaK, {
                      [sty.svgtype_onlineVisit__lpwaK7QAlK]: hasVariant(
                        $state,
                        "type",
                        "onlineVisit"
                      )
                    })}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jNh3G,
                      {
                        [sty.texttype_onlineVisit__jNh3G7QAlK]: hasVariant(
                          $state,
                          "type",
                          "onlineVisit"
                        )
                      }
                    )}
                  >
                    {"\u0627\u06cc\u062a\u0627"}
                  </div>
                </Stack__>
              ) : null}
              {(
                hasVariant($state, "type", "onlineVisit")
                  ? (() => {
                      try {
                        return $props.onlineVisit.channels.includes("whatsapp");
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return true;
                        }
                        throw e;
                      }
                    })()
                  : true
              ) ? (
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zcaIc, {
                    [sty.freeBoxtype_onlineVisit__zcaIc7QAlK]: hasVariant(
                      $state,
                      "type",
                      "onlineVisit"
                    )
                  })}
                >
                  <WhatsappsvgIcon
                    className={classNames(projectcss.all, sty.svg___9I5Wv, {
                      [sty.svgtype_onlineVisit___9I5Wv7QAlK]: hasVariant(
                        $state,
                        "type",
                        "onlineVisit"
                      )
                    })}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__z3K8S,
                      {
                        [sty.texttype_onlineVisit__z3K8S7QAlK]: hasVariant(
                          $state,
                          "type",
                          "onlineVisit"
                        )
                      }
                    )}
                  >
                    {"\u0648\u0627\u062a\u0633\u0627\u067e"}
                  </div>
                </Stack__>
              ) : null}
            </Stack__>
          </div>
          {(hasVariant($state, "type", "onlineVisit") ? true : false) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__orRx,
                {
                  [sty.texttype_onlineVisit__orRx7QAlK]: hasVariant(
                    $state,
                    "type",
                    "onlineVisit"
                  )
                }
              )}
            >
              {hasVariant($state, "type", "onlineVisit")
                ? "\u062a\u0636\u0645\u06cc\u0646 \u0628\u0627\u0632\u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0628\u0644\u063a \u0648\u06cc\u0632\u06cc\u062a \u062f\u0631 \u0635\u0648\u0631\u062a \u0646\u0627\u0631\u0636\u0627\u06cc\u062a\u06cc"
                : "\u0627\u0645\u06a9\u0627\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u0632\u0648\u062f\u062a\u0631\u06cc\u0646 \u0646\u0648\u0628\u062a"}
            </div>
          ) : null}
          {(() => {
            try {
              return $props.onlineVisit.channels.includes("secure_call");
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
                sty.text___595KF
              )}
            >
              {
                "\u0627\u0645\u06a9\u0627\u0646 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u062a\u0645\u0627\u0633 \u0628\u0627 \u0627\u06cc\u0646 \u067e\u0632\u0634\u06a9 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f."
              }
            </div>
          ) : null}
          {(
            hasVariant($state, "type", "onlineVisit")
              ? (() => {
                  try {
                    return (
                      $props.expertises.group_expertises[0].id !== 21 &&
                      $props.expertises.group_expertises[0].id !== 47
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
                })()
              : false
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7Hl7X,
                {
                  [sty.texttype_onlineVisit___7Hl7X7QAlK]: hasVariant(
                    $state,
                    "type",
                    "onlineVisit"
                  )
                }
              )}
            >
              <React.Fragment>
                <React.Fragment>{"\u062a\u0627 "}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"\u06f3 \u0631\u0648\u0632"}
                </span>
                <React.Fragment>
                  {
                    " \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0647\u0631 \u0633\u0648\u0627\u0644\u06cc \u062f\u0627\u0631\u06cc\u062f \u0627\u0632 \u067e\u0632\u0634\u06a9 \u0628\u067e\u0631\u0633\u06cc\u062f"
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
          ) : null}
          {(
            hasVariant($state, "type", "onlineVisit")
              ? (() => {
                  try {
                    return (
                      $props.expertises.group_expertises[0].id === 21 ||
                      $props.expertises.group_expertises[0].id === 47
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
                })()
              : false
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___26Dwi,
                {
                  [sty.texttype_onlineVisit___26Dwi7QAlK]: hasVariant(
                    $state,
                    "type",
                    "onlineVisit"
                  )
                }
              )}
            >
              <div
                className={projectcss.__wab_expr_html_text}
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    try {
                      return (() => {
                        const [hours, minutes, seconds] =
                          $props.service.duration.split(":");
                        let humanizedDuration = "";
                        if (+hours === 0 && +minutes === 0) {
                          humanizedDuration = `${+seconds} ثانیه`;
                        } else if (+hours === 0) {
                          humanizedDuration = `${+minutes} دقیقه`;
                        } else if (+minutes === 0) {
                          humanizedDuration = `${+hours} ساعت`;
                        } else {
                          humanizedDuration = `${+hours} ساعت و ${+minutes} دقیقه`;
                        }
                        return `مدت زمان گفتگو: <b>${humanizedDuration}</b>`;
                      })();
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
          {(
            hasVariant($state, "type", "onlineVisit")
              ? (() => {
                  try {
                    return !!$props.waitingTimeInfo.find(
                      item => item.center_id === "5532"
                    )?.waiting_time_title;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })()
              : (() => {
                  try {
                    return true;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return true;
                    }
                    throw e;
                  }
                })()
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dNgG,
                {
                  [sty.texttype_onlineVisit__dNgG7QAlK]: hasVariant(
                    $state,
                    "type",
                    "onlineVisit"
                  )
                }
              )}
            >
              <div
                className={projectcss.__wab_expr_html_text}
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    try {
                      return `میانگین زمان انتظار تا ویزیت: <b>${
                        $props.waitingTimeInfo.find(
                          item => item.center_id === "5532"
                        ).waiting_time_title
                      }</b>`;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0632\u0645\u0627\u0646 \u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u0627 \u0648\u06cc\u0632\u06cc\u062a: ";
                      }
                      throw e;
                    }
                  })()
                }}
              />
            </div>
          ) : null}
        </div>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          children2={
            hasVariant($state, "type", "onlineVisit") ? (
              <React.Fragment>
                {(() => {
                  try {
                    return `شروع ویزیت با ${$props.information.display_name}`;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\u0634\u0631\u0648\u0639 \u0648\u06cc\u0632\u06cc\u062a";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            ) : (
              "\u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0648\u0628\u062a"
            )
          }
          className={classNames("__wab_instance", sty.button, {
            [sty.buttontype_onlineVisit]: hasVariant(
              $state,
              "type",
              "onlineVisit"
            )
          })}
          endIcon={
            <PlasmicIcon__
              PlasmicIconType={
                hasVariant($state, "type", "onlineVisit")
                  ? Icon24Icon
                  : Icon6Icon
              }
              className={classNames(projectcss.all, sty.svg__nu5Bc, {
                [sty.svgtype_onlineVisit__nu5Bc7QAlK]: hasVariant(
                  $state,
                  "type",
                  "onlineVisit"
                )
              })}
              role={"img"}
            />
          }
          onClick={async event => {
            const $steps = {};

            $steps["sendEvent"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return window.paziresh24
                        ?.logger("doctor-profile")
                        .sendEvent({
                          group: "doctor profile",
                          type: "doctor profile press online visit book button",
                          event: {
                            page_url: window.location.pathname,
                            referrer: window.document.referrer,
                            group_expertises:
                              $props.expertises.group_expertises[0]?.name ??
                              "سایر",
                            doctor_name: $props.information.display_name
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
              $steps["sendEvent"] != null &&
              typeof $steps["sendEvent"] === "object" &&
              typeof $steps["sendEvent"].then === "function"
            ) {
              $steps["sendEvent"] = await $steps["sendEvent"];
            }

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {
                    destination: (() => {
                      try {
                        return `/booking/${$props.seo.slug}?centerId=5532&skipTimeSelectStep=true`;
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
          showEndIcon={
            hasVariant($state, "type", "onlineVisit") ? true : undefined
          }
          space={hasVariant($state, "type", "onlineVisit") ? true : undefined}
        />
      </Stack__>
    </div>
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
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicServices__ArgsType,
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
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
