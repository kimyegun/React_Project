import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {changeField, initializeForm} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
    const dispath = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login
    }));
    // 인풋 변경 이벤트 헨들러
    const onChange = e => {
        const { value, name } = e.target;
        dispath(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    } ;

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        //구현예정
    };

    //컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispath(initializeForm('login'));
    }, [dispath]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default LoginForm;