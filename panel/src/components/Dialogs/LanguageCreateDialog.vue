<template>
  <k-dialog
    ref="dialog"
    :button="$t('language.create')"
    :notification="notification"
    theme="positive"
    size="medium"
    @submit="$refs.form.submit()"
  >
    <k-form
      ref="form"
      :fields="fields"
      :novalidate="true"
      v-model="language"
      @submit="submit"
    />
  </k-dialog>
</template>

<script>
import DialogMixin from "@/mixins/dialog.js";
import slug from "@/ui/helpers/slug.js";

export default {
  mixins: [DialogMixin],
  data() {
    return {
      notification: null,
      language: {
        name: "",
        code: "",
        direction: "ltr"
      }
    };
  },
  computed: {
    fields() {
      return {
        name: {
          label: this.$t("language.name"),
          type: "text",
          required: true,
          icon: "title",
        },
        code: {
          label: this.$t("language.code"),
          type: "text",
          required: true,
          counter: false,
          icon: "globe",
          width: "1/2"
        },
        direction: {
          label: this.$t("language.direction"),
          type: "select",
          required: true,
          empty: false,
          options: [
            { value: "ltr", text: this.$t("language.direction.ltr") },
            { value: "rtl", text: this.$t("language.direction.rtl") }
          ],
          width: "1/2"
        },
        locale: {
          label: this.$t("language.locale"),
          type: "text",
          placeholder: "en_US"
        },
      };
    }
  },
  watch: {
    "language.name"(name) {
      this.language.code = slug(name).substr(0, 2);
    },
    "language.code"(code) {
      this.language.code = slug(code);
    }
  },
  methods: {
    open() {

      this.language = {
        name: "",
        code: "",
        direction: "ltr"
      };

      this.$refs.dialog.open();
    },
    submit() {
      this.$api
        .post("languages", this.language)
        .then(() => {
          this.$store.dispatch("languages/load");
          this.success({
            message: this.$t("language.created"),
            event: "language.create"
          });
        })
        .catch(error => {
          this.$refs.dialog.error(error.message);
        });
    }
  }
};
</script>
