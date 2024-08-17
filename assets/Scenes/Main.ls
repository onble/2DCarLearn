{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$runtime": "res://285eb4bf-4e95-475b-b789-86420cbbf0a9",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "d8021029-da07-48e5-b635-37b9b0370c60",
      "scriptPath": "../src/MainScene/GameManager.ts",
      "Car_1": {
        "_$uuid": "c2db703e-13af-436d-a07e-18a0e39f7f83",
        "_$type": "Prefab"
      },
      "Car_2": {
        "_$uuid": "9b52986b-a6ea-481c-92ce-4dd3336eeb02",
        "_$type": "Prefab"
      },
      "Car_3": {
        "_$uuid": "8b7b36ab-88f8-42b0-83ea-8bbfd3e53363",
        "_$type": "Prefab"
      },
      "Car_4": {
        "_$uuid": "c0df7e7c-48cb-493f-9669-8d258561d106",
        "_$type": "Prefab"
      },
      "Car_5": {
        "_$uuid": "418994d9-4161-431a-80c9-2440bdddb061",
        "_$type": "Prefab"
      },
      "Car_6": {
        "_$uuid": "c94ed1b3-5a46-4ebe-89af-5034b4e668da",
        "_$type": "Prefab"
      },
      "Coin": {
        "_$uuid": "c4eb3702-3f11-4103-8fdc-f2d1fcf536a7",
        "_$type": "Prefab"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "j3fmgupx",
      "_$type": "Sprite",
      "name": "road",
      "width": 1079.8870554908756,
      "height": 1929.0508083774153,
      "texture": {
        "_$uuid": "fc54d87c-da1a-4b7b-b8da-47387095ce51",
        "_$type": "Texture"
      },
      "_$comp": [
        {
          "_$type": "b5206236-1c3f-4f53-a3c8-65bfbfdf0898",
          "scriptPath": "../src/MainScene/AutoMove.ts"
        }
      ]
    },
    {
      "_$id": "3zvrmmnc",
      "_$type": "Sprite",
      "name": "road(1)",
      "y": -1929,
      "width": 1079.8870554908756,
      "height": 1929.0508083774153,
      "texture": {
        "_$uuid": "fc54d87c-da1a-4b7b-b8da-47387095ce51",
        "_$type": "Texture"
      },
      "_$comp": [
        {
          "_$type": "b5206236-1c3f-4f53-a3c8-65bfbfdf0898",
          "scriptPath": "../src/MainScene/AutoMove.ts"
        }
      ]
    },
    {
      "_$id": "eaeyiztn",
      "_$type": "Sprite",
      "name": "player",
      "x": 450,
      "y": 1360,
      "width": 120,
      "height": 236,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "texture": {
        "_$uuid": "f87b09a0-3955-4530-9a31-e158f1b16327",
        "_$type": "Texture"
      },
      "_$comp": [
        {
          "_$type": "BoxCollider",
          "x": 27,
          "y": 38,
          "label": "player",
          "width": 63,
          "height": 168
        },
        {
          "_$type": "RigidBody",
          "type": "kinematic"
        },
        {
          "_$type": "0803f7b9-4ed0-4adf-bb7b-83cb5b64ba9a",
          "scriptPath": "../src/MainScene/Player.ts"
        }
      ]
    },
    {
      "_$id": "pw48g50j",
      "_$var": true,
      "_$type": "Sprite",
      "name": "StartPanel",
      "width": 1080,
      "height": 1920,
      "_mouseState": 2,
      "_$comp": [
        {
          "_$type": "530da2bc-e102-49dc-8e6c-6183ec9aa348",
          "scriptPath": "../src/MainScene/StartPanel.ts",
          "btn_Play": {
            "_$ref": "4u6qek3y"
          },
          "btn_AudioOn": {
            "_$ref": "dl1eqmr8"
          },
          "btn_AudioOff": {
            "_$ref": "g7f1utka"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "h6gy6t36",
          "_$type": "Image",
          "name": "bg",
          "width": 1080,
          "height": 1920,
          "skin": "res://cfc700b3-efc9-432b-8cb7-3b088c43088e",
          "color": "#ffffff"
        },
        {
          "_$id": "x7jbvwbf",
          "_$type": "Image",
          "name": "Logo",
          "x": 165,
          "y": 207,
          "width": 751,
          "height": 350,
          "centerX": 0,
          "skin": "res://ac190b03-8843-40b9-ae84-de81e22803fd",
          "color": "#ffffff"
        },
        {
          "_$id": "4u6qek3y",
          "_$type": "Image",
          "name": "btn_Play",
          "x": 540,
          "y": 1133,
          "width": 328,
          "height": 328,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "mouseThrough": true,
          "centerX": 0,
          "skin": "res://38ae524b-99bf-4a19-bfc5-869fd87a53f6",
          "color": "#ffffff",
          "_$comp": [
            {
              "_$type": "Animator2D",
              "controller": {
                "_$uuid": "b6b97da8-5040-4f0b-9d96-642da603dd85",
                "_$type": "AnimationController2D"
              },
              "controllerLayers": [
                {
                  "_$type": "AnimatorControllerLayer2D",
                  "name": "Base Layer",
                  "states": [
                    {
                      "_$type": "AnimatorState2D",
                      "name": "BtnPlay",
                      "clipStart": 0,
                      "clip": {
                        "_$uuid": "e63106bf-c08c-4a61-b81c-4cd452083090",
                        "_$type": "AnimationClip2D"
                      },
                      "soloTransitions": []
                    }
                  ],
                  "defaultStateName": "BtnPlay"
                }
              ]
            }
          ]
        },
        {
          "_$id": "dl1eqmr8",
          "_$type": "Button",
          "name": "btn_AudioOn",
          "x": 844,
          "y": 1552,
          "width": 126,
          "height": 126,
          "_mouseState": 2,
          "right": 110,
          "bottom": 242,
          "stateNum": 1,
          "skin": "res://40d75362-9766-40a3-86be-280ca60d557e",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "g7f1utka",
          "_$type": "Button",
          "name": "btn_AudioOff",
          "x": 844,
          "y": 1552,
          "width": 126,
          "height": 126,
          "visible": false,
          "_mouseState": 2,
          "right": 110,
          "bottom": 242,
          "stateNum": 1,
          "skin": "res://d6332834-869e-4793-a5e0-e3d12bfe2fb7",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        }
      ]
    },
    {
      "_$id": "rf19a3we",
      "_$type": "Sprite",
      "name": "BottomCollider",
      "y": 2000,
      "width": 1080,
      "height": 39,
      "_$comp": [
        {
          "_$type": "RigidBody",
          "type": "kinematic",
          "allowSleep": false
        },
        {
          "_$type": "BoxCollider",
          "isSensor": true,
          "label": "BottomCollider",
          "width": 1080,
          "height": 39
        }
      ]
    },
    {
      "_$id": "o9hnlkle",
      "_$var": true,
      "_$type": "Sprite",
      "name": "GamePanel",
      "x": 2,
      "y": 1,
      "width": 1073,
      "height": 1119,
      "_mouseState": 2,
      "_$comp": [
        {
          "_$type": "a5b4391e-8689-4079-b1e7-1d2b41069af3",
          "scriptPath": "../src/MainScene/GamePanel.ts"
        }
      ],
      "_$child": [
        {
          "_$id": "vprtoirb",
          "_$type": "Button",
          "name": "btn_Pause",
          "x": 34.999999999999986,
          "y": 57.99999999999999,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://26a08211-7676-4cbb-89ff-63ab41eb8033",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "xixchnsz",
          "_$type": "Text",
          "name": "txt_Best",
          "x": 495.0000000000001,
          "y": 31.999999999999943,
          "width": 552,
          "height": 204,
          "text": "Best:0",
          "fontSize": 100,
          "color": "rgba(76, 97, 239, 1)",
          "align": "right",
          "valign": "middle",
          "leading": 2,
          "stroke": 5,
          "strokeColor": "rgba(17, 19, 89, 1)"
        },
        {
          "_$id": "r222vhqp",
          "_$type": "Text",
          "name": "txt_Last",
          "x": 493,
          "y": 158.99999999999991,
          "width": 552,
          "height": 204,
          "text": "Last:0",
          "fontSize": 100,
          "color": "rgba(220, 52, 52, 1)",
          "align": "right",
          "valign": "middle",
          "leading": 2,
          "underlineColor": "rgba(255, 255, 255, 1)",
          "stroke": 5,
          "strokeColor": "rgba(84, 23, 23, 1)"
        },
        {
          "_$id": "zts47b3s",
          "_$type": "Text",
          "name": "txt_Score",
          "x": 149.99999999999997,
          "y": 296.00000000000006,
          "width": 781,
          "height": 343,
          "text": "0",
          "fontSize": 200,
          "color": "rgba(37, 199, 64, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2,
          "underlineColor": "rgba(255, 255, 255, 1)",
          "stroke": 5,
          "strokeColor": "rgba(21, 6, 6, 1)"
        }
      ]
    },
    {
      "_$id": "0bhbfk7v",
      "_$var": true,
      "_$type": "Sprite",
      "name": "PausePanel",
      "width": 1080,
      "height": 1920,
      "visible": false,
      "_mouseState": 2,
      "_$comp": [
        {
          "_$type": "1adc1bb4-58ac-4cee-93c0-99ca6824e6c4",
          "scriptPath": "../src/MainScene/PausePanel.ts"
        }
      ],
      "_$child": [
        {
          "_$id": "tytttr2m",
          "_$type": "Image",
          "name": "Image",
          "width": 1080,
          "height": 1920,
          "skin": "res://cfc700b3-efc9-432b-8cb7-3b088c43088e",
          "color": "#ffffff"
        },
        {
          "_$id": "ndi3v3jd",
          "_$type": "Button",
          "name": "btn_Close",
          "x": 35,
          "y": 58,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://cf2692e0-bbfb-4cfd-826a-f70b394c2c5b",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "oelfcsib",
          "_$type": "Button",
          "name": "btn_Home",
          "x": 290,
          "y": 988,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://0cdd8121-e5ab-460c-a729-66f4cf340767",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "pi6e9s06",
          "_$type": "Button",
          "name": "btn_Restart",
          "x": 500,
          "y": 988,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://536e9868-a530-4117-96f5-751b7d46e035",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "m0zt0x9e",
          "_$type": "Button",
          "name": "btn_AudioOn",
          "x": 710,
          "y": 988,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://40d75362-9766-40a3-86be-280ca60d557e",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "gaxqtpz6",
          "_$type": "Button",
          "name": "btn_AudioOff",
          "x": 710,
          "y": 988,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://d6332834-869e-4793-a5e0-e3d12bfe2fb7",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "k8k0ybym",
          "_$type": "Text",
          "name": "txt_Pause",
          "x": 150,
          "y": 739,
          "width": 781,
          "height": 188,
          "text": "Pause",
          "fontSize": 150,
          "color": "rgba(249, 52, 75, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2,
          "underlineColor": "rgba(255, 255, 255, 1)",
          "stroke": 5,
          "strokeColor": "rgba(21, 6, 6, 1)"
        }
      ]
    },
    {
      "_$id": "86vpproj",
      "_$var": true,
      "_$type": "Sprite",
      "name": "GameOverPanel",
      "width": 1080,
      "height": 1920,
      "visible": false,
      "_mouseState": 2,
      "_$comp": [
        {
          "_$type": "125f9b93-956c-466a-95cd-51876e1c99e3",
          "scriptPath": "../src/MainScene/GameOverPanel.ts"
        }
      ],
      "_$child": [
        {
          "_$id": "q4pm0qzh",
          "_$type": "Image",
          "name": "Image",
          "width": 1080,
          "height": 1920,
          "skin": "res://cfc700b3-efc9-432b-8cb7-3b088c43088e",
          "color": "#ffffff"
        },
        {
          "_$id": "6mxj5g3z",
          "_$type": "Button",
          "name": "btn_Home",
          "x": 330,
          "y": 1250,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://0cdd8121-e5ab-460c-a729-66f4cf340767",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "qchndnh5",
          "_$type": "Button",
          "name": "btn_Restart",
          "x": 633,
          "y": 1250,
          "width": 120,
          "height": 120,
          "_mouseState": 2,
          "stateNum": 1,
          "skin": "res://536e9868-a530-4117-96f5-751b7d46e035",
          "label": "",
          "labelSize": 20,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "jo01keag",
          "_$type": "Text",
          "name": "txt_Over",
          "x": 155,
          "y": 340,
          "width": 781,
          "height": 188,
          "text": "GAMEOVER",
          "fontSize": 150,
          "color": "rgba(249, 52, 75, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2,
          "underlineColor": "rgba(255, 255, 255, 1)",
          "stroke": 5,
          "strokeColor": "rgba(21, 6, 6, 1)"
        },
        {
          "_$id": "k0e7ppm4",
          "_$type": "Text",
          "name": "txt_Score",
          "x": 155,
          "y": 565,
          "width": 781,
          "height": 188,
          "text": "Score:100",
          "fontSize": 100,
          "color": "rgba(249, 52, 75, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2,
          "underlineColor": "rgba(255, 255, 255, 1)",
          "stroke": 5,
          "strokeColor": "rgba(21, 6, 6, 1)"
        },
        {
          "_$id": "gvb5nvio",
          "_$type": "Text",
          "name": "txt_HeightScore",
          "x": 155,
          "y": 731,
          "width": 781,
          "height": 188,
          "text": "HeightScore:100",
          "fontSize": 100,
          "color": "rgba(249, 52, 75, 1)",
          "align": "center",
          "valign": "middle",
          "leading": 2,
          "underlineColor": "rgba(255, 255, 255, 1)",
          "stroke": 5,
          "strokeColor": "rgba(21, 6, 6, 1)"
        }
      ]
    }
  ]
}