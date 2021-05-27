<template>
  <img
    :style="styleProps"
    class="l-image-component"
    :src="src"
    @click.prevent="handleClick"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useComponentCommon from "../../hooks/useComponentCommon";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from "../../defaultProps";
const imageProps = transformToComponentProps(imageDefaultProps);

export default defineComponent({
  name: "l-image",
  props: {
    ...imageProps,
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropsNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>