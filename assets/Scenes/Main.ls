{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
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
          "x": 12,
          "y": 17,
          "label": "player",
          "width": 94,
          "height": 211
        },
        {
          "_$type": "RigidBody",
          "type": "kinematic",
          "category": 32,
          "mask": 6
        },
        {
          "_$type": "0803f7b9-4ed0-4adf-bb7b-83cb5b64ba9a",
          "scriptPath": "../src/MainScene/Player.ts"
        }
      ]
    },
    {
      "_$id": "pw48g50j",
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
      "_$id": "q5crzyz0",
      "_$type": "Sprite",
      "name": "Car_1",
      "x": 196,
      "y": 83.50000000000045,
      "width": 136,
      "height": 248,
      "texture": {
        "_$uuid": "5fa07541-87ac-4d96-bf2b-5b4ea17c6539",
        "_$type": "Texture"
      },
      "_$comp": [
        {
          "_$type": "5a0e7e81-e13d-42d9-a731-b57336953b45",
          "scriptPath": "../src/MainScene/Car.ts",
          "speed": 15
        },
        {
          "_$type": "RigidBody"
        },
        {
          "_$type": "BoxCollider",
          "x": 29,
          "y": 20,
          "width": 83,
          "height": 211
        }
      ]
    }
  ]
}