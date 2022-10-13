import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
// define global rules
defineRule('required', required);
defineRule('email', email);
defineRule('confirmed', (value, [target]) => {
    if (value === target) {
        return true;
    }
    return '密码不匹配，请确认密码';
});


defineRule('minLength', (value, [limit]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    if (value.length < limit) {
        return `最小长度为 ${limit} `;
    }
    return true;
});
defineRule('maxLength', (value, [limit]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    if (value.length > limit) {
        return `最大长度为 ${limit} `;
    }
    return true;
});
defineRule('minMax', (value, [min, max]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    const numericValue = Number(value);
    if (numericValue < min) {
        return `This field must be greater than ${min}`;
    }
    if (numericValue > max) {
        return `This field must be less than ${max}`;
    }
    return true;
});
localize({ zh_CN });
configure({
    generateMessage: localize('zh_CN', {
        names: {
            username: '用户名',
            password: '密码',
            code: '验证码',
        },
        fields: {
            username: {
                email: '请输入正确邮箱格式',
                required: '用户名是必填项'

            },
            password: {
                required: '密码是必填项',
            },
            code: {
                required: '验证码是必填项',
            },
            nickname: {
                required: '请输入昵称',
            },
            confirmation: {
                required: "请再次输入，确认密码",
            }

        }
    }),
})