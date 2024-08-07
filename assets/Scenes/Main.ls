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
          "_$id": "j3fmgupx",
          "_$type": "Sprite",
          "name": "road",
          "width": 1079.8870554908756,
          "height": 1929.0508083774153,
          "texture": {
            "_$uuid": "fc54d87c-da1a-4b7b-b8da-47387095ce51",
            "_$type": "Texture"
          }
        },
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
              "controllerLayers": []
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
    }
  ]
}