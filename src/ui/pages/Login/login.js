import React from 'react';
import {
	BoxCenterLogin,
	ContainerLogin,
	EnterAccount,
	InputsLogin,
	LoginS,
	LogoType,
	OptionAccount,
	TitleBoxLogin,
} from './style';
import Background from '../../images/background2.jpg';
import Logo from '../../images/logo.png';

export const Login = () => {
	return (
		<>
			<LoginS className='login'>
				<img
					src={Background}
					alt='background'
					style={{ borderRadius: '0 60px 60px 0', height: '958px' }}
				/>
				<ContainerLogin className='container'>
					<LogoType>
						<img src={Logo} alt='LogoType_Write' className='img-logo' />
						<h3 className='text-logo'>Quantum Task</h3>
					</LogoType>
					<BoxCenterLogin>
						<TitleBoxLogin>
							<h3 className='box-title'>Nice to see you again</h3>
						</TitleBoxLogin>
						<InputsLogin>
							<div className='box-ipt'>
								<p className='title-boxIpt'>Email</p>
								<input
									className='ipt-login'
									type='email'
									placeholder='Insert E-mail'
								/>
							</div>
							<div className='box-ipt'>
								<p className='title-boxIpt'>Password</p>
								<input
									className='ipt-login'
									type='password'
									placeholder='Enter Password'
								/>
							</div>
						</InputsLogin>
						<OptionAccount>
							<a className='link-account' href='/'>
								Register
							</a>
							<a className='link-account' href='/'>
								I forgot the password
							</a>
						</OptionAccount>
						<EnterAccount>Sign in</EnterAccount>
					</BoxCenterLogin>
				</ContainerLogin>
			</LoginS>
		</>
	);
};
