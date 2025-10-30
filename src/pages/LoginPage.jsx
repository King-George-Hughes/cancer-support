import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { logo2 } from "../assets";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import { useLogin } from "../hooks/auth-hook";
import { useStateContext } from "../providers/ContextProvider";

const LoginPage = () => {
  const { token } = useStateContext();
  const { loginMutation, isLoggingIn } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    loginMutation(formData, {
      onSettled: () => {
        reset();
      },
    });
  };

  if (token) return <Navigate to="/dashboard" />;

  return (
    <div>
      <section className="gradient-form min-h-screen bg-neutral-200 flex items-center justify-center">
        <div className="container h-full w-full p-2 lg:p-10">
          <div className="flex w-full h-full items-center justify-center text-neutral-800">
            <div className="block rounded-lg shadow-lg bg-white">
              <div className="w-full">
                {/* <!-- Left column container--> */}
                <div className="w-full max-w-[550px] px-4 md:px-0">
                  <div className="md:mx-5 p-5">
                    {/* <!--Logo--> */}
                    <div className="text-center mb-10">
                      <img
                        className="mx-auto w-20 lg:w-40"
                        src={logo2}
                        alt="CSNF"
                      />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4 font-bold text-xl lg:text-2xl text-center uppercase">
                        login to your account
                      </p>
                      <input
                        {...register("email", {
                          required: "Email is required!",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please provide a valid email address!",
                          },
                        })}
                        type="email"
                        placeholder="Email address"
                        className="text-black w-full border rounded-sm px-4 py-2"
                      />
                      <ErrorMessage>{errors.email?.message}</ErrorMessage>

                      <input
                        {...register("password", {
                          required: "Password field is required!",
                          minLength: {
                            value: 6,
                            message:
                              "Password should be at least 6 characters!",
                          },
                        })}
                        type="password"
                        placeholder="Password"
                        className="mt-5 text-black w-full border rounded-sm px-4 py-2"
                      />
                      <ErrorMessage>{errors.password?.message}</ErrorMessage>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <div className="w-full mt-5">
                          <button
                            className="w-full rounded px-6 py-3 text-xs font-medium bg-pink-600 text-white uppercase leading-normal transition duration-150 ease-in-out flex items-center justify-center gap-2"
                            type="submit"
                          >
                            Log in {isLoggingIn && <Spinner size="sm" />}
                          </button>
                        </div>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 me-2">Don&apos;t have an account?</p>
                        <Link
                          to={"/"}
                          className="inline-block rounded border-2 border-secondary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-secondary transition duration-150 ease-in-out hover:border-secondary-600 hover:bg-danger-50/50 hover:text-secondary-600 focus:border-secondary-600 focus:bg-danger-50/50 focus:text-secondary-600 focus:outline-none focus:ring-0 active:border-secondary-700 active:text-secondary-700"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                        >
                          Back to Home page
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
