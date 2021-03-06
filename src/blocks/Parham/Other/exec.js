import * as Blockly from "blockly";

const blockName = "parham_exec";

const blockData = { 
  "message0": "Exec %1",
  "args0": [
    {
      "type": "input_value",
      "name": "exec",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 255,
  "tooltip": "Exec",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_exec = Blockly.Python.valueToCode(block, 'exec', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `exec(${value_exec})\n`;
  return code;
};