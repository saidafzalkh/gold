import { AuthModel } from "../..";
import { AuthContentBlockLayout } from "../../AuthContentBlockLayout";
import { AccauntCreate } from "./steps/AccauntCreate";
import { useAuth } from "../../core/Auth";
import { getUserByToken } from "../../core/_requests";
import { useEffect, useState } from "react";
import { EmailVerification } from "./steps/EmailVerification";
import { useRegistrationForm } from "./core/RegistrationForm";
import { useNavigate } from "react-router-dom";

export function Registration() {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState<AuthModel>();
  const navigate = useNavigate();
  const { saveAuth, setCurrentUser } = useAuth();

  const {
    user: registrationFormUser,
    step: accauntCreateStep,
    setStep: setAccauntCreateStep,
  } = useRegistrationForm();

  const onAccauntCreate = async (auth: AuthModel) => {
    setUser(auth);
    setStep(1);
  };

  const handleCurrentUser = async (user: AuthModel) => {
    if (user != null) {
      saveAuth(user);
      const { data } = await getUserByToken(user.token);
      setCurrentUser(data);
    }
  };

  useEffect(() => {
    if (registrationFormUser != null) onAccauntCreate(registrationFormUser);
  }, [registrationFormUser]);

  if (step === 0) {
    return (
      <AuthContentBlockLayout
        props={{
          back: {
            onClick: () =>
              accauntCreateStep === 0
                ? navigate(-1)
                : setAccauntCreateStep &&
                  setAccauntCreateStep((prev) => prev - 1),
          },
        }}
        title="Создать аккаунт"
        description="Для доступа на платформу"
      >
        <AccauntCreate />
      </AuthContentBlockLayout>
    );
  }

  if (step === 1) {
    return (
      <AuthContentBlockLayout
        title="Подтвердите email"
        description="Введите код, который пришел на вашу почту"
        iconUrl="media/svg/general/smartphone.svg"
        props={{ back: { onClick: () => setStep(0) } }}
      >
        <EmailVerification user={user} onSuccess={handleCurrentUser} />
      </AuthContentBlockLayout>
    );
  }
}
