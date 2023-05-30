<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef, onMounted } from 'vue';
import {
  RuleObject,
  ValidateErrorEntity
} from 'ant-design-vue/es/form/interface';
import Logo from '../Logo/index.vue';
import { useStore } from 'vuex';
import { UserStoreModule } from '@/store/modules/user/store';
import router from '@/router';

interface FormState {
  user_id: string;
  user_pwd: string;
}

export default defineComponent({
  name: 'LoginForm',
  components: { Logo },
  setup() {
    const store = useStore();
    const sessionRememberId = sessionStorage.getItem('spacesoft-rememberId');
    const rememberId = ref(!!sessionRememberId);
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      user_id: sessionRememberId ?? '',
      user_pwd: ''
    });

    let validateID = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the ID');
      }
      // else {
      //   if (formState.user_id !== '') {
      //     formRef.value.validateFields('user_id');
      //   }
      //   return Promise.resolve();
      // }
    };
    let validatePW = async (rule: RuleObject, value: string) => {
      if (value === '') {
        // return Promise.reject('Please input the ID');
        // } else if (value !== formState.user_pwd) {
        return Promise.reject('Please input the password');
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      user_id: [{ required: true, validator: validateID, trigger: 'change' }],
      user_pwd: [{ validator: validatePW, trigger: 'change' }]
    };

    const handleFinish = (values: FormState) => {
      console.log(values, formState);
      UserStoreModule.Login(values).then(async (resolve: any) => {
        if (resolve === 200) {
          console.log('rememberId ::: ', rememberId.value);
          if (rememberId.value) {
            sessionStorage.setItem('spacesoft-rememberId', values.user_id);
          }

          router.push(`/`);
        }
      });
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    // const handleChange = () => {
    //   console.log('handleChange');
    // };

    onMounted(() => {
      if (sessionStorage.getItem('spacesoft-rememberId')) {
        rememberId.value = true;
        formRef.value.user_id = sessionStorage.getItem('spacesoft-rememberId');
      } else {
        sessionStorage.removeItem('spacesoft-rememberId');
      }
    });

    return {
      formState,
      formRef,
      rules,
      rememberId,
      handleFinishFailed,
      handleFinish,
      resetForm
      // handleChange
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
        name="user_id"
        initialValue=""
        :style="{ width: '100%', marginBottom: '15px' }">
        <a-input
          v-model:value="formState.user_id"
          autocomplete="off"
          placeholder="ID" />
      </a-form-item>

      <a-form-item
        has-feedback
        name="user_pwd"
        initialValue=""
        :style="{ width: '100%', marginBottom: '15px' }">
        <a-input
          v-model:value="formState.user_pwd"
          type="password"
          autocomplete="off"
          placeholder="PASSWORD" />
      </a-form-item>

      <a-checkbox v-model:checked="rememberId" :style="{ color: '#3d464d' }">
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
