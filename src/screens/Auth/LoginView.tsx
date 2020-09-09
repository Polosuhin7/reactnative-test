import React, {Dispatch} from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {i18n} from "../../utils/i18n";
// import {} from "./Auth.contract";


const LoginView = () => {
    return (
        <></>
    );
    // TODO:
    // const auth = useSelector((state: IAppState) => state.auth);
    // const dispatch = useDispatch<Dispatch<AuthAction | any>>();
    //
    // const onSignin = (data: FormDataType) => {
    //     dispatch(authLogin(data as ILoginFormData));
    // };
    //
    // const onSignup = () => navigation.navigate('Register');
    // const onRestore = () => navigation.navigate('Restore');
    //
    // return (
    //     <KeyboardAvoidingView
    //         behavior={Platform.OS == "ios" ? "padding" : "height"}
    //     >
    //         <SafeAreaView>
    //             {auth.error && (
    //                 <ErrorView
    //                     error={auth.error}
    //                     action={() => dispatch(collectionLoad())}
    //                 />
    //             )}
    //             <View style={[baseStyle.container]}>
    //                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //                     <View style={{paddingTop: 50}}>
    //                         <PageTitle text="Flute"/>
    //                         <Form onSubmit={onSignin} error={null}>
    //                             <FormItem label={i18n.username} name="username" type="text" isRequired/>
    //                             <FormItem label={i18n.password} name="password" type="text" isPassword isRequired/>
    //                             <View style={{alignSelf: 'center', width: '70%', paddingTop: 15}}>
    //                                 <FormButton text={i18n.signIn} size="l" type="promo"/>
    //                             </View>
    //                         </Form>
    //                         <View style={{alignSelf: 'center', width: '70%', paddingVertical: 15}}>
    //                             <Button
    //                                 type="secondary"
    //                                 size="l"
    //                                 onPress={onSignup}
    //                                 text={i18n.signUp}/>
    //                         </View>
    //                         <View style={{alignSelf: 'center', width: '70%'}}>
    //                             <Button
    //                                 type="underline"
    //                                 size="s"
    //                                 onPress={onRestore}
    //                                 // disabled={props.isLoading}
    //                                 text={i18n.restorePassword}/>
    //                             {/*)}*/}
    //                         </View>
    //                     </View>
    //                 </TouchableWithoutFeedback>
    //             </View>
    //         </SafeAreaView>
    //     </KeyboardAvoidingView>
    // );
};

export default LoginView;
