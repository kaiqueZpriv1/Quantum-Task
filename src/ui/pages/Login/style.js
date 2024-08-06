import styled from 'styled-components';

export const LoginS = styled.div`
	display: flex;
	background: #fafafa;
`;

export const ContainerLogin = styled.div`
	padding: 160px 0 0 30px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
`;

export const LogoType = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	.img-logo {
		width: 80px;
	}
	.text-logo {
		font-size: 1.5em;
		color: #343a40;
		font-weight: 600;
		font-family: 'Oswald', sans-serif;
	}
`;

export const BoxCenterLogin = styled.div`
	padding: 100px 0 0 30px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	gap: 10px;
	.box-ipt {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.title-boxIpt {
		font-size: 1em;
		font-weight: 400;

		color: #343a40;
	}
`;

export const TitleBoxLogin = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	.box-title {
		font-size: 1.5em;
		color: #343a40;
		font-weight: 500;
	}
`;

export const InputsLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 30px;
	.ipt-login {
		background: #e9ecef;
		width: 460px;
		padding: 15px;
		border: none;
		border-radius: 10px;
		font-size: 1em;
		font-weight: 400;
	}
	.ipt-login:focus {
		outline: none;
	}
`;

export const OptionAccount = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.link-account {
		font-size: 1em;
		font-weight: 400;
		color: #219ebc;
	}
`;

export const EnterAccount = styled.button`
	margin-top: 20px;
	padding: 10px 20px;
	background: #219ebc;
	border-radius: 5px;
	border: none;
	font-size: 1.3em;
	font-weight: 500;
	color: #fafafa;
	width: 100%;
`;
