import * as Blockly from "blockly";

const blockName = "parham_list_push";

const blockData = {
  "message0": "In List  %1 Push %2",
  "args0": [
    {
      "type": "input_value",
      "name": "list",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "push"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#745ba5",
  "tooltip": "Push List",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_push = Blockly.Python.valueToCode(block, 'push', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_list}.append(${value_push})\n`;
  return code;
};