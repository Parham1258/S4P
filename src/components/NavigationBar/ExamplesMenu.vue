<template>
    <b-nav-item-dropdown id="v-step-0" :text="$t('examples.title')" right>
        <b-dropdown-item @click="load('Hello World')">{{ "Hello World" }}</b-dropdown-item>
      
      </b-nav-item-dropdown>
</template>

<script>
import Blockly from "blockly";
import HelloWorldExample from "../../examples/Hello World";
const examples = {
    "Hello World": HelloWorldExample,
};

export default {
    name: "editmenu",
    computed: {
    },
    methods: {
        load(example){
            this.$swal({
                title: this.$t('examples.confirm.title'),
                text: this.$t('examples.confirm.text'),
                buttons: {
                    cancel: this.$t('examples.confirm.cancel'),
                    no: {
                        text: this.$t('examples.confirm.no'),
                        value: false,
                        className: "red-button"
                    },
                    yes: {
                        text: this.$t('examples.confirm.yes'),
                        value: true
                    }
                },
                closeOnClickOutside: true
            }).then(result => {
                if(typeof result == "object"){
                    return;
                } else if (result) {
                    this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
                }
                const exampleXml = examples[example];
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(exampleXml), this.$store.state.workspace);
                setTimeout(() => {
                    this.$toast.open({
                        message: this.$t('examples.loaded', {
                            example
                        }),
                        type: "success",
                        dismissible: true,
                        duration: 10000
                    });
                }, (200));
            });
        }
    }
}
</script>
