<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
import {
  RuleObject,
  ValidateErrorEntity
} from 'ant-design-vue/es/form/interface';
import Logo from '../Logo/index.vue';

interface FormState {
  id: string;
  password: string;
}

export default defineComponent({
  name: 'LoginForm',
  components: { Logo },
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      id: '',
      password: ''
    });

    let validateID = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the ID');
      }
      // else {
      //   if (formState.id !== '') {
      //     formRef.value.validateFields('id');
      //   }
      //   return Promise.resolve();
      // }
    };
    let validatePW = async (rule: RuleObject, value: string) => {
      if (value === '') {
        // return Promise.reject('Please input the ID');
        // } else if (value !== formState.password) {
        return Promise.reject('Please input the password');
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      id: [{ required: true, validator: validateID, trigger: 'change' }],
      password: [{ validator: validatePW, trigger: 'change' }]
    };
    const layout = {
      // labelCol: { span: 4 },
      // wrapperCol: { span: 14 }
    };
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };

    const handleChange = () => {
      console.log('handleChange');
    };
    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
      handleChange
    };
  }
});
</script>

<template>
  <a-form
    class="login-form"
    name="login"
    ref="formRef"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    :style="{
      width: '360px',
      height: '337px',
      borderRadius: '3px',
      boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.3)'
    }"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed">
    <Logo width="100%" height="77px" />
    <a-row
      :style="{
        height: '210px',
        padding: '50px 35px',
        backgroundColor: '#e8edf0',
        justifyContent: 'flex-end'
      }">
      <a-form-item
        has-feedback
        name="id"
        initialValue=""
        :style="{ width: '100%', marginBottom: '15px' }">
        <a-input
          v-model:value="formState.id"
          autocomplete="off"
          placeholder="ID" />
      </a-form-item>

      <a-form-item
        has-feedback
        name="password"
        initialValue=""
        :style="{ width: '100%', marginBottom: '15px' }">
        <a-input
          v-model:value="formState.password"
          id="password"
          type="password"
          autocomplete="off"
          placeholder="PASSWORD" />
      </a-form-item>

      <a-checkbox @change="handleChange" :style="{ color: '#3d464d' }">
        아이디 기억하기
      </a-checkbox>
    </a-row>

    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :style="{
          width: '100%',
          height: '50px',
          color: '#f7fbfc',
          borderRadius: '0 0 3px 3px',
          border: 'transparent',
          backgroundColor: '#4ca7db'
        }"
        >로그인</a-button
      >
    </a-form-item>
  </a-form>
</template>

<style lang="scss">
.login-form {
  .ant-form-item {
    margin-bottom: 1.6rem;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #4ca7db !important;
    border-color: #4ca7db !important;
    border-radius: 2px;
  }

  .ant-checkbox-checked:after {
    border: 2px solid #4ca7db !important;
  }
}
</style>
