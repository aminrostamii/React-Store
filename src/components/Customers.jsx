import React from 'react';
import adidas from '../assets/adidasBrand.jpg'

const Customers = () => {
    return (
        <section className="bg-white mt-40">
            <div className='flex flex-col'>
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            {/* <h1 className=' text-3xl'>Our Customers</h1> */}
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <a className="flex items-center lg:justify-center" target="_blank">
                    {/* adidas */}
              <svg viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fillRule="evenodd" clipRule="evenodd"> <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"></path> <path d="M11.694 110.012H9.225c-.206 0-.721 0-.721-.309 0-.205.103-.309.412-.412 2.264-.721 2.778-1.955 2.778-3.703V87.169c0-1.647-.515-2.882-2.778-3.705-.309 0-.412-.206-.412-.309 0-.411.515-.309.721-.309h20.373c4.63 0 8.438 3.704 8.438 8.334 0 4.631-3.808 8.334-8.438 8.334h-10.29v6.277c.104 1.646.618 2.777 2.779 3.498.309.104.411.207.411.412 0 .309-.514.309-.72.309H11.694v.002zm151.876-9.981h4.836l-4.836-8.232-.516-.824-4.32 9.056h4.836zm0-17.286h3.293l13.787 24.285c.412.615.926 1.234 1.545 1.541.514.412 1.131.516 1.645.721.207.104.412.207.412.412 0 .309-.514.309-.721.309H171.287c-.205 0-.824 0-.824-.309 0-.205.207-.309.414-.412.617-.205 1.027-.514 1.232-1.131.207-.721 0-1.131-.514-2.059a171.916 171.916 0 0 0-2.16-4.424H157.91l-.102.205c-.104.412-.926 1.852-1.545 3.396-.822 1.646-1.131 2.057-.926 2.881.104.617.617.926 1.234 1.131.207.104.311.207.311.412 0 .309-.516.309-.721.309h-5.66c-.205 0-.721 0-.721-.309 0-.205.104-.309.412-.412.516-.205 1.131-.309 1.646-.721.617-.307 1.133-.926 1.543-1.541l.721-1.545 7.82-16.36-1.133-1.955c-1.027-1.647-2.057-2.676-3.189-3.293-.514-.309-1.029-.309-1.543-.515-.309-.103-.412-.206-.309-.412 0-.206.205-.103.309-.206h7.513v.002zm-30.767 27.163h.412c18.934 0 18.729-27.061 0-27.061h-15.537c-.309 0-.822-.103-.822.309 0 .103.205.309.41.309 2.264.72 2.779 1.955 2.881 3.499v18.83c-.102 1.646-.617 2.777-2.881 3.498-.205.104-.41.207-.41.412 0 .309.514.309.822.309H127.659v-.104h5.144v-.001zm0-25.106c2.883 0 5.25 2.367 5.25 5.247v12.554c0 2.881-2.367 5.248-5.25 5.248h-5.145V84.802h5.145zM93.6 100.031h4.836L93.6 91.799l-.514-.824-4.321 9.056H93.6zm0-17.286H96.996l13.788 24.285c.309.615.824 1.234 1.441 1.541.514.412 1.133.516 1.75.721.205.104.41.207.41.412 0 .309-.617.309-.822.309H101.32c-.207 0-.721 0-.721-.309 0-.205.102-.309.41-.412.516-.205 1.029-.514 1.133-1.131.205-.721 0-1.131-.412-2.059-.721-1.543-1.543-2.984-2.262-4.424H87.94l-.102.205c-.103.412-.824 1.852-1.544 3.396-.72 1.646-1.131 2.057-.925 2.881.206.617.617.926 1.235 1.131.205.104.411.207.411.412 0 .309-.514.309-.822.309h-5.558c-.206 0-.824 0-.824-.309 0-.205.206-.309.412-.412.618-.205 1.132-.309 1.75-.721.514-.307 1.132-.926 1.44-1.541l.72-1.545 7.924-16.36-1.132-1.955c-1.029-1.647-2.161-2.676-3.19-3.293-.618-.309-1.029-.309-1.647-.515-.206-.103-.412-.206-.308-.412.102-.206.308-.103.412-.206H93.6v.002zm-33.956 18.007c2.367.822 5.248 1.027 7.511.309l8.953 7.717.72.617c.104.104.104.205.104.309 0 .309-.515.309-.721.309h-9.466l-7.1-5.865-5.763-4.631v6.381c.104 1.543.721 2.674 2.881 3.395.206.104.309.207.309.412 0 .309-.515.309-.721.309H43.9c-.308 0-.823 0-.823-.309 0-.205.206-.309.411-.412 2.47-.822 2.779-2.057 2.881-4.012V87.477c-.103-1.852-.412-3.19-2.881-4.013-.206 0-.411-.206-.411-.309 0-.411.515-.309.823-.309H63.965A8.3 8.3 0 0 1 72.3 91.18a8.299 8.299 0 0 1-8.335 8.334H57.483c.309.617 1.029.824 1.646 1.133.206.001.309.105.515.105zm0-3.19h.823c2.675 0 4.939-2.882 4.939-6.587 0-3.601-2.264-6.482-4.939-6.482h-6.586v13.069h5.763zM25.173 84.494h-5.865v13.069H26.1c2.778 0 4.939-2.882 4.939-6.587 0-3.601-2.161-6.482-4.939-6.482h-.927z"></path> </g> </g></svg>
                </a>
                <a className="flex items-center lg:justify-center" target="_blank">
                    {/* gucci */}
                    <svg viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fillRule="evenodd" clipRule="evenodd"> <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"></path> <path d="M170.855 84.725h5.643c-.625.485-1 1.079-1 1.892v19.431c0 .812.391 1.391 1 1.875h-5.643c.609-.484.984-1.078.984-1.875V86.616c.001-.813-.359-1.407-.984-1.891zM40.065 93.072c-.922-1.985-1.938-3.939-3.642-5.361-1.813-1.532-4.112-2.454-6.488-2.454-6.315 0-9.145 5.705-9.145 11.317 0 5.425 2.705 10.911 8.801 10.911 2.485 0 4.909-1.078 6.44-3.033v-4.377c0-1.188-.391-1.953-1.313-2.656h6.456c-.688.781-1.109 1.578-1.109 2.656v4.377c-2.955 2.752-6.628 4.439-10.708 4.439-7.206 0-13.1-5.299-13.1-12.677 0-7.331 5.815-12.349 12.928-12.349 4.424 0 8.003 1.626 10.88 4.893v4.314zM55.884 84.725h6.081c-.829.609-1.11 1.297-1.11 2.313v14.179c0 3.891 4.564 5.799 7.91 5.799 3.283 0 7.566-1.922 7.566-5.721V87.038c0-.954-.235-1.61-.875-2.313h3.314c-.672.688-.922 1.375-.922 2.313v14.257c0 5.127-6.049 7.096-10.239 7.096-4.314 0-10.614-1.906-10.614-7.174V87.038c-.001-.969-.392-1.688-1.111-2.313zM116.785 93.15c-.812-2.048-1.766-3.845-3.439-5.33-1.797-1.595-3.986-2.595-6.408-2.595-6.252 0-9.457 5.471-9.457 11.146 0 5.705 3.33 11.098 9.504 11.098 4.596 0 7.879-3.236 9.801-7.129v4.221c-2.859 2.83-6.549 4.268-10.582 4.268-7.473 0-13.069-4.83-13.069-12.536 0-7.487 5.377-12.411 12.709-12.411 4.064 0 8.002 1.407 10.941 4.205v5.063zM155.99 93.15c-.812-2.048-1.768-3.845-3.439-5.33-1.797-1.595-3.986-2.595-6.408-2.595-6.254 0-9.443 5.471-9.443 11.146 0 5.705 3.314 11.098 9.49 11.098 4.596 0 7.893-3.236 9.801-7.129v4.221c-2.861 2.83-6.535 4.268-10.582 4.268-7.473 0-13.068-4.83-13.068-12.536 0-7.487 5.377-12.411 12.707-12.411 4.064 0 8.004 1.407 10.943 4.205v5.063h-.001z"></path> </g> </g></svg>
                </a>
                <a className="flex items-center lg:justify-center" target="_blank">
                    {/*nike*/}
                  <svg viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fillRule="evenodd" clipRule="evenodd"> <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"></path> <path d="M2.834 87.855h6.101c4.318.038 7.847 3.848 7.847 8.504 0 4.674-3.529 8.484-7.847 8.523H2.834V87.855zM5.5 89.92v12.953h2.741c3.942-.111 5.895-3.172 5.895-6.438 0-3.248-1.99-5.895-5.2-6.439L5.5 89.92zm21.551-2.459c5.181 0 9.405 4.017 9.405 8.917s-4.224 8.899-9.405 8.899c-5.162 0-9.386-4-9.386-8.899s4.224-8.917 9.386-8.917zm.038 2.159c3.754 0 6.814 3.022 6.814 6.739 0 3.697-3.06 6.721-6.814 6.721s-6.833-3.023-6.833-6.721c-.001-3.717 3.078-6.739 6.833-6.739zm10.099-1.727h2.515v15.017h4.806v1.953H37.188v-16.97zm15.488-.526c1.952 0 3.773.582 5.275 1.558v3.098c-1.258-1.502-3.135-2.478-5.256-2.478-3.754 0-6.814 3.06-6.814 6.814 0 3.736 3.06 6.795 6.814 6.795 2.122 0 3.999-.975 5.256-2.477v3.135a9.543 9.543 0 0 1-5.275 1.576c-5.181 0-9.405-4.055-9.405-9.011 0-4.955 4.224-9.01 9.405-9.01zm8.71 15.488h6.082v2.008h-8.729V87.892h8.729v1.915h-6.082v5.05h6.082v2.064h-6.082v5.934zm15.656.938a3.431 3.431 0 0 1-.938.639 3.383 3.383 0 0 1-1.107.375c-.094.02-.188.037-.282.037-.094.02-.188.02-.281.02-.263 0-.526-.037-.789-.094a2.284 2.284 0 0 1-.713-.357 2.07 2.07 0 0 1-.582-.73 2.225 2.225 0 0 1-.3-.902v-.113c-.019-.055-.019-.094-.019-.131s0-.057.019-.094v-.113-.037c.019-.018.019-.018.019-.037v-.074-.057c.113-.525.357-.939.732-1.277.356-.338.75-.639 1.164-.883a8.267 8.267 0 0 1-.619-.826 1.544 1.544 0 0 1-.282-.9v-.15c.019-.037.019-.074.019-.131.019 0 .019-.02.019-.037v-.02a.14.14 0 0 0 .019-.074c0-.02.019-.037.019-.057.094-.414.3-.732.638-.957a2.132 2.132 0 0 1 1.051-.357h.244c.451.037.883.207 1.258.508.376.281.563.693.563 1.238 0 .506-.169.92-.469 1.221-.3.318-.657.6-1.033.863l1.803 2.178c.169-.207.356-.414.525-.619.15-.207.319-.434.451-.658l.619.639a3.163 3.163 0 0 1-.394.582c-.131.168-.282.357-.432.525a6.02 6.02 0 0 0-.113.113l-.113.111 1.314 1.596h-1.164l-.846-.96zm-2.271.244c.319-.037.619-.131.882-.301a6.89 6.89 0 0 0 .751-.562c.019 0 .038-.02.057-.037.019 0 .038-.02.057-.037l-2.047-2.441c-.019 0-.019.02-.037.037-.019 0-.038.02-.057.037-.037.02-.056.039-.094.057-.019 0-.037.02-.057.039-.169.111-.319.225-.469.336-.15.113-.282.264-.395.414-.038.074-.094.15-.131.244a1.052 1.052 0 0 0-.094.262l-.056.227c-.019.074-.019.15-.019.225 0 .395.15.752.451 1.07.281.301.657.469 1.107.469 0 0 .019 0 .019-.018h.076c.019 0 .019-.02.038-.02h.018v-.001zm-.751-5.951V98.143c0 .02-.019.037-.019.057v.037c0 .207.056.395.169.564.112.188.244.355.394.506.038.057.094.113.132.168.037.057.094.096.131.15.038-.018.056-.037.094-.055a.138.138 0 0 1 .094-.039c.225-.131.413-.281.601-.449.188-.17.3-.377.338-.639v-.057-.057c0-.018.019-.037.019-.057v-.037c0-.262-.094-.488-.281-.639a1.05 1.05 0 0 0-.62-.281h-.17c-.188 0-.375.076-.544.188a.812.812 0 0 0-.338.583zm18.735-10.794c3.378 0 6.364 1.727 8.034 4.299l-2.195 1.126a6.878 6.878 0 0 0-5.82-3.21c-3.792-.019-6.871 3.06-6.871 6.852 0 3.773 3.079 6.852 6.871 6.852 3.191 0 5.707-1.596 5.894-4.918h-5.481v-2.009h5.35c0-.038 2.723 0 2.891 0v.094c0 5.313-2.891 9.087-8.672 9.087-5.801 0-9.48-4.094-9.48-9.087s4.26-9.086 9.479-9.086zm7.247 17.571l7.02-17.026h1.672l7.076 17.026h-2.76l-1.951-4.807h-6.439l-1.914 4.807h-2.704zm5.594-6.965l2.271-6.044 2.309 6.044h-4.58zm34.842 6.965l7.021-17.026h1.67l7.078 17.026h-2.76l-1.953-4.807h-6.439l-1.914 4.807h-2.703zm5.613-6.965l2.252-6.044 2.309 6.044h-4.561zm28.101 6.965l7.021-17.026h1.67l7.078 17.026h-2.76l-1.953-4.807h-6.439l-1.914 4.807h-2.703zm5.594-6.965l2.271-6.044 2.311 6.044h-4.582zm-57.894-8.071c1.672.188 2.291.901 2.291 2.572.02 1.67-1.127 2.553-2.59 2.553h-2.217v-5.144h2.516v.019zm.132 7.189h.131c1.238 0 3.453.283 3.453 3.041 0 2.217-1.934 2.854-3.771 2.836l.449.018h-2.91v-5.895h2.648zm-3.267 7.847h4.393c3.004 0 5.164-1.971 5.164-4.807 0-2.176-1.354-3.848-3.268-4.504 1.09-.695 1.709-1.934 1.709-3.511 0-2.572-1.729-4.148-4.281-4.205-1.389-.019-2.797 0-4.205 0H116.69v17.026h2.027v.001zm16.031-15.036c1.672.188 2.291.901 2.311 2.572.018 1.67-1.127 2.553-2.592 2.553h-2.215v-5.144h2.496v.019zm.15 7.189h.133c1.219 0 3.453.283 3.453 3.041 0 2.217-1.951 2.854-3.773 2.836l.432.018h-2.891v-5.895h2.646zm-3.265 7.847h4.393c2.984 0 5.162-1.971 5.162-4.807 0-2.176-1.369-3.848-3.285-4.504 1.107-.695 1.709-1.934 1.709-3.511 0-2.572-1.727-4.148-4.262-4.205-1.408-.019-2.816 0-4.223 0H129.606v17.026h2.027v.001zm25.699-16.97h1.615l11.92 12.595V87.893h2.309v16.97h-1.764l-11.678-12.465v12.465h-2.402v-16.97z"></path> </g> </g></svg>
                </a>
                <a className="flex items-center lg:justify-center" target="_blank">
                  <svg viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fillRule="evenodd" clipRule="evenodd"> <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"></path> <path fill="#000000" d="M2.834 96.09h11.247v4.09h-3.477v6.849h12.677v-6.849h-3.578v-4.09h11.45v4.09h-3.68v20.14h3.68v3.987h-11.45v-3.987h3.578v-9.304H10.604v9.304h3.477v3.987H2.834v-3.987h3.579v-20.14H2.834v-4.09zM137.373 96.09h23.106v7.873h-3.885v-3.783h-11.246v6.748h9.609v3.986h-9.609v9.406h11.144v-5.418h4.088v9.405h-23.207v-3.987h3.783v-20.14h-3.783v-4.09zM36.367 96.09h23.207v7.873h-3.987v-3.783H44.341v6.748h9.61v3.986h-9.61v9.406h11.144v-5.418h4.089v9.405H36.367v-3.987h3.783v-20.14h-3.783v-4.09zM144.121 92.308h8.281l2.045 2.453h-8.076l-2.25-2.453zM183.174 108.154c-2.863-.717-4.805-.613-7.77-1.533-2.557-.92-3.066-2.455-3.066-3.477 0-1.125 1.123-3.885 5.213-3.885s6.85 2.76 6.953 5.111h3.986v-8.28h-3.885v1.842l.205.51v.104-.104c-.104 0-.205-.307-.615-.613v-.102c-1.123-1.023-3.475-2.25-6.951-2.25-4.191 0-9.098 2.658-9.098 7.667 0 4.908 3.475 6.543 6.543 7.361 2.965.818 4.498.818 7.053 1.533 2.453.613 4.09 2.146 4.09 4.396 0 2.045-1.328 4.805-6.645 4.805-5.215 0-7.361-2.863-7.975-6.85h-3.783v9.916h3.885v-1.84l-.102-.512s.102.307.613.613v.104c1.941 1.533 4.6 2.555 7.871 2.555 3.783 0 10.225-1.941 10.225-8.689.001-4.905-2.556-7.155-6.747-8.382zM128.275 120.32v-20.14h3.782v-4.09h-10.223l-6.85 16.562-.101.819-.205-.819-6.748-16.562H97.605v4.09h3.782v20.14h-3.782v3.987h11.551v-3.987h-3.578V100.588l.309.922 7.871 18.81h2.25l7.871-18.81.205-1.024.102 1.125v18.709h-3.579v3.987h11.45v-3.987h-3.782zM45.875 85.254H41.99v-1.022h2.863c.102.204.715.715 1.022 1.022zM143.508 85.254c0-.409.408-.818.92-1.022h2.045v1.022h-2.965zM79.305 85.969c-1.738.818-3.885.716-5.623 0H53.338a7.973 7.973 0 0 1-6.134 0H41.99v1.942h104.483v-1.942H79.305zM54.565 85.254c.307-.205 1.022-.92 1.124-1.022h15.744c.204.307.716.818 1.022 1.022h-17.89zM76.545 84.64c2.658 0 4.907-2.249 4.907-4.907 0-2.76-2.249-5.01-4.907-5.01a5.018 5.018 0 0 0-5.009 5.01c0 2.658 2.249 4.907 5.009 4.907v1.022c-3.374 0-6.032-2.658-6.032-5.929 0-3.374 2.658-6.032 6.032-6.032 3.271 0 5.929 2.658 5.929 6.032a5.933 5.933 0 0 1-5.929 5.929V84.64zM57.018 78.916c0-3.681-3.067-6.748-6.747-6.748-3.783 0-6.748 3.067-6.748 6.748 0 3.783 2.965 6.747 6.748 6.747 3.68 0 6.747-2.965 6.747-6.747h-1.125c0 3.169-2.556 5.725-5.623 5.725a5.716 5.716 0 0 1-5.725-5.725c0-3.169 2.556-5.623 5.725-5.623a5.607 5.607 0 0 1 5.623 5.623h1.125z"></path> <path d="M79.714 83.107l-2.044-2.352v-.102c.103-.102.103-.205.204-.307l3.067.818c.102 0 .307.102.307.204 0-.102.103-.511.204-.715-.102.102-.307.102-.511.102l-2.862-.817c-.103 0-.103-.103-.103-.103v-.512l2.965-1.125s.307 0 .307.102c0-.102-.205-.613-.205-.715 0 .102-.205.307-.307.307l.205-.103-3.067 1.125c0 .102 0 0-.102 0a.22.22 0 0 0-.205-.205c0-.103-.102-.205 0-.205l1.636-2.556c.103-.102.307-.205.409-.205-.103 0-.511-.307-.716-.409.103 0 .103.307 0 .409l-1.636 2.556h-.204s-.205-.102-.307-.102c0 0-.103 0-.103-.103l-.102-2.964c0-.205 0-.409.205-.409h-.818c.103 0 .205.307.205.409l.103 2.964c0 .103-.103.103-.103.103s-.205.102-.307.205c0 0-.102 0-.102-.103l-1.942-2.351c-.103-.102-.103-.307-.103-.409-.102.103-.511.409-.613.511.102 0 .307.103.409.205l1.942 2.351v.103c-.103 0-.205.205-.205.307 0 0-.102.102-.205.102l-2.862-.818c-.205-.102-.307-.205-.307-.307 0 .102-.205.613-.205.716 0 0 .307-.103.409 0l2.862.716c.103 0 .103.102.103.102v.511l-2.862 1.227c-.103 0-.307.102-.307 0 0 .102.102.511.204.716 0-.103.205-.307.307-.307l2.761-1.227c.102 0 .102.103.102.103.102 0 .205.102.205.204.102 0 .102.103.102.103l-1.738 2.556c-.103.103-.205.204-.307.204.102.103.511.409.613.409-.103 0 0-.307 0-.409l1.738-2.453c0-.103.102-.103.102-.103.103.103.205.103.307.103.102 0 .102 0 .102.102l.205 3.067c0 .103-.103.307-.205.307h.818c-.205 0-.205-.204-.205-.409l-.204-2.965c0-.102.102-.102.102-.102.102 0 .307-.103.409-.205 0 0 .103 0 .103.102l2.044 2.25c0 .102.102.306.102.409l.511-.511c-.101.103-.305-.102-.305-.102zM50.066 75.03c2.862 0 5.725.307 7.361.818.204 0 .204.204 0 .307-1.738.409-4.601.715-7.259.715-2.658.103-5.521 0-7.361-.409-.204 0-.204-.205 0-.205 1.637-.612 4.397-1.123 7.259-1.226v-.511c-3.067.103-6.134.818-8.69 1.738-.307.102-.307.307 0 .307 2.863.716 5.828.818 8.792.716 2.863-.103 5.93-.307 8.69-1.125.409-.103.307-.307.102-.307a30.61 30.61 0 0 0-8.894-1.33v.512z" fill="#000000"></path> <path d="M80.43 73.19c-.716.205-1.943.613-2.556.613-.511 0-3.066-.102-4.805 0-2.352.102-2.556.409-2.658.205-.511-.818-.92-2.045-1.738-2.761-4.805.818-9.508.103-13.801-1.431v-.614c.307.103.511.103.715.103-.715-1.022-1.942-1.33-2.658-2.454-.409-.307-.511-.92-.92-1.227.102 1.125-.818 1.943-.92 2.862.613.205 1.431.205 1.738.103.409-.103.92 0 1.125.307.307.102.511.307.92.307v.614c-.512-.103-.613-.205-1.022-.409-.511.205-.92.102-1.125-.102-.103-.103-1.125-.103-1.534-.103-1.329 0-2.76.511-3.476 1.636-.307.613-.205 1.329.102 1.84.205.307 1.125 1.636 1.738 2.044l-.818.205c-1.227-1.125-2.147-2.147-1.942-3.476.614-2.862 3.271-2.454 3.987-3.68.511-1.125.715-4.396.102-5.316-1.738-.716-3.884-1.636-4.294-3.681-.102-.511.103-1.125.614-1.227.919-.204 1.533.307 2.249.614.307-.205-.307-.92.409-.92.92 0 1.533 1.84 1.84 1.943l-.102.715c-.613-.204-2.863-1.431-3.067-1.533-.409-.205-.92-.512-1.227-.103-.409.511.103 1.125.409 1.636 4.805 5.009 12.779-.307 17.993 3.271.102-.307 0-.409-.205-.511-3.578-3.373-9.303-1.635-13.903-2.76l.102-.715c5.725 1.431 13.291-.92 16.255 5.623 1.942 2.761 3.987 7.156 8.178 7.259 3.374.102 5.623-1.227 7.259-3.681 2.249-4.089 3.578-8.792 7.565-11.552.409-.205.613 0 .409.102-1.942 1.942-3.681 4.499-4.601 6.646 1.533 5.827 4.907 4.6 5.725 4.498-.205-2.147 0-8.485 4.601-10.019a9.334 9.334 0 0 1 9.508-1.125c-3.578 3.374-5.725 8.179-6.441 11.552l-3.987 1.125c.307-.614.307-1.636.205-2.76-.409.204-.818.511-1.738 1.022-.409.102-.103-.511-.103-.511 0-.204 1.022-.613 1.84-1.124-.307-2.352-.511-5.419 1.431-7.361-3.986 1.329-2.862 9.712-2.453 10.735-1.125.511-2.658.511-2.658.511l-.205-1.432c-1.738.614-4.703.205-6.032-4.396-1.43 2.964-2.657 7.666-6.03 8.893zM142.793 60.718c-.205-.205-.309-.307-.512-.307-.104-.102 0-.205.102-.205.102-.102.307 0 .41.205.102.102.102.307 0 .307z" fill="#000000"></path> <path d="M51.293 80.449l2.146 2.454c.205.205.205.511.103.614.307-.103.716-.614.92-.818-.103.102-.511.102-.613-.103L51.6 80.142v-.204l.102-.103c0-.102.102-.102.102-.102l3.169 1.125c.307.204.409.409.409.511.103-.204.307-.817.409-1.022-.103.103-.409.205-.613.103l-3.169-1.125c-.102 0-.102 0-.102-.102v-.205c0-.102.102-.102.102-.102l3.271-.511c.409-.103.613.102.613.204 0-.204-.102-.92-.102-1.125 0 .103-.205.409-.613.511l-3.169.511c-.102 0-.102-.102-.102-.102-.103-.103-.103-.205-.205-.307v-.102l2.556-2.146c.307-.205.613-.205.715-.103-.204-.205-.613-.716-.817-.92.103.102 0 .409-.205.715l-2.454 2.045c-.103.102-.103.102-.103 0-.102 0-.204 0-.306-.103 0 0-.102-.102 0-.102l1.125-3.169a.616.616 0 0 1 .511-.409c-.205-.102-.92-.409-1.125-.409.102 0 .307.409.204.715l-1.125 3.067c0 .103-.102.103-.102.103h-.307l-.103-.103-.613-3.271c0-.409.205-.613.205-.613-.205 0-.818.103-1.125.205.102 0 .409.205.511.511l.614 3.169c0 .103 0 .103-.103.205-.102 0-.204.102-.307.102h-.102L47 75.03c-.205-.307-.205-.613-.102-.613-.205.102-.716.511-.818.716.103 0 .409 0 .614.204l2.249 2.454v.103l-.205.204h-.102l-3.067-1.124c-.307-.103-.511-.409-.409-.511-.205.307-.307.92-.409 1.125.102-.103.409-.205.715-.103l3.067 1.022v.511l-3.271.613c-.307 0-.613-.204-.613-.307 0 .307.103 1.022.205 1.227 0-.103.102-.409.511-.511l3.169-.613s.103 0 .103.102 0 .102.102.205v.102l-2.556 2.044c-.307.307-.614.205-.614.103 0 .307.511.818.614.92 0-.102 0-.409.205-.613l2.658-2.044c0-.103 0-.103.102 0l.205.204c.103 0 .103 0 .103.103l-1.125 3.066c-.103.307-.409.512-.511.409.205.103.818.409 1.125.409-.205 0-.307-.307-.205-.613l1.125-3.169s0-.102.103-.102c.102.102.204.102.307.102 0 0 .102 0 .102.102l.614 3.169c0 .409-.205.613-.307.715.307 0 .92-.204 1.125-.307-.102.103-.409-.204-.409-.409l-.613-3.271v-.102c.102 0 .205-.103.307-.103.097-.103.097-.103.199 0zM141.361 61.126c-.104-.102 0-.204 0-.307.102-.307.203-.307.203-.613-.51-.409-.613-1.227-.307-1.431.307-.307 1.33.102 1.33.102.92-.715 1.227-1.227 1.738-1.533.715 0 2.146 1.329 2.146 2.147-.205.307-.717.818-1.533 1.84.307.715.307 1.227-.205 1.636-.102 0-.307 0-.512-.205.104 1.022 1.227 1.635 1.637 2.454 0 1.636 1.738 3.68-.205 5.009-.408.205-.818.511-1.021.92.307 1.636.92 3.374 1.227 5.112l-1.943.102c-.203.614-.816 1.738-.613 2.352 0 0-.102-.103.104 0 .307.409.408 3.783.307 4.089 0 .409.307.409.102 1.125-.205.102-1.021.613-1.125.92-.512.511-1.941.614-1.941.409 0-.511 1.021-1.125 1.227-1.738.203-2.454 0-4.908-1.33-6.85-.51-.307-.92.511-1.227.92.512 1.533 1.432 3.169 1.33 4.907 0 .511.613 1.227.307 1.942l-1.637.818h-5.93c-.203-.307-.613-.614-.51-1.022h5.314c0-.205.512-.102 1.023-.92 0-2.454-2.557-6.032-2.146-7.259.51-1.534 1.227-2.76 2.043-4.805l.41-.102c-.92 3.067-2.25 4.601-2.045 5.521.102.511.307.92.613 1.533l.205.613c.102.307.408 1.022.613 1.227.307 0 .512-.205.715-.307 0-.409-.307-.92-.512-1.227l-.816.307-.205-.613c.613 0 1.021-.409.512-.716 1.432-.715-.307-.511.203-.817.818-.409 1.229-1.943 1.33-2.863 0-.205.102-.307.307-.307.613 1.636.613 3.783 1.635 5.316v.511c-.102.409 0 .92.205 1.227.92.102.818-.103.613-1.227-.203 0-.613-.102-.818 0v-.511c.104-.102.512 0 .615-.102-.309-.511-.309-.92-.309-1.431 0-.307.205-.92.41.409.307.102.818-2.352.92-3.169-1.943.409 0-1.84-1.432-1.942l.717-1.227c0-.409-.307-.716-.818-.511l-.41-.512c-.307-.102-.613-.613-1.021-.92-.307.307-.818.92-.92 1.329-.102.103.205.204.307.103.307-.307.512.306 1.021.204.205-.204.818-.307.613-.716l.41.512c-.41.204-.41.919-.41 1.431-.715 1.329-.408-.715-1.227-.715-.51.307-.715-.511-1.021-.409l-.41.102c0-.715.104-1.533 0-2.351.615-3.476 1.33-3.374 1.432-4.396 0-.409 1.533-1.227 1.432-1.636.102 0 .307.307.307.409-.102.511-1.125.511-1.021 1.635.613-1.125 2.352-1.022 2.453-2.351-.307-.818.408-.307.408-1.125-.203-.205-.816-.818-.92-1.125-.102-.103.307-.716-1.125-.716-.102.103-.203.716-.408 1.022-.102.103-.307.307-.205.409 0 .102.205.204.205.613-.102.409 0 .614.205.818.818.409 1.432 0 .51.512 0 .102 0 .204-.102.307 0-.103-.307-.511-.408-.614-.104 0-.613-.307-.512-.715.099-.408.099-.612-.104-.818zM113.859 57.242c.104.716-.307 1.227-.307 1.943.717 1.738 0 3.067.205 4.703-.818-.511-1.021-1.84-1.328-3.271-.205-1.227.102-1.636.203-2.965l1.227-.41zM111.713 57.753c-.102 2.146-.408 3.169 1.125 6.543-3.885 1.635-7.055 2.76-11.654 4.089.51-3.271 3.68-9.508 6.338-11.246 2.249.614 4.191.614 4.191.614z" fill="#000000"></path> <path d="M101.693 81.778c-1.021.307-1.021.92-.408 1.534.408.306.818.818.818.92H95.56c0 .307.307.511.511 1.022h36.19c.205-.511-.408-1.125-.613-1.738-2.557-.92-2.557-3.271-2.658-5.93 0-.103-.205-.409-.205-.92-.307-.409-2.043-4.601-1.227-7.975l.613-1.124c.512-.716-.102-1.125.307-1.943l7.566-1.431c.102-.103.102-.409-.102-.511 0-.102.102 0 0 0l-7.361 1.329c.408-1.84-1.227-2.454-.512-3.987 1.021 1.124 3.783 3.066 5.215 3.373l.716-.101c-1.84-.818-5.111-2.761-6.951-5.316-.205 0-.41-.205-.613-.307 0 .204.51.818.408.92 0 0-1.227.818-3.477-.205-.715 1.431-8.689 5.009-8.689 5.009.307 2.25 1.33 3.681 2.453 4.908.104.204-.307-.205 0 0 1.637 1.329 3.578 1.942 5.727 2.351.408 1.227 1.941 5.214 2.043 5.827.205.613.512.613.512.613.205.205.92 1.534.92 2.045l.205 2.147c.102.511.715.102.818.613l-.307 1.329h1.533c-.818-.715-.307-1.942-1.33-2.454-.102-1.227-.203-2.147-.715-2.658-.408-1.227-1.738-4.498-2.557-7.463l.512-.716c-2.25.614-3.986-.204-6.031-1.329-1.533-.716-.613-.103-.104-.409 2.455 1.125 3.682.818 5.521.614.205.307.613.613.613 1.124l-.512.716c.512-.511.92-.205 1.227 1.227.41 1.227.818 2.146 1.125 3.169.41 1.022.717 2.352 1.023 3.067 0 0 .307 0 .51.409.717 2.249.92 2.556.818 3.578.205.818 1.33.103 1.227 1.125h-26.887c.408-1.636-.512-3.067 0-4.601-1.023-1.636-3.578-2.862-3.17-5.112 1.227-1.738 5.215-3.476 4.295-5.521 3.68-1.84 5.52 1.227 8.895.92 1.227 0 2.555-.205 3.68-.511-1.432-1.125-2.658-2.862-3.373-4.396-7.156 2.964-14.109 5.316-21.777 6.85l-.613-.205c-.715.102-12.37 2.76-11.961 3.271-4.396.307-9.508 2.147-10.632 2.76-.511.307-.614.511 0 .716 4.703 1.227 8.587.307 15.846-2.454l-.511-.409c-.409.307-6.338 2.352-8.69 2.658-2.454.307-4.601.205-5.623-.103-.307-.102-.307-.102-.103-.204 4.601-1.84 13.495-3.476 14.722-1.942.715.205 1.227.613 1.636 1.125s1.227.307 1.84.205c.817-.205.92-.92.92-1.636l-.92-.103c-.409 0-2.045.205-2.249.409-.613-.511-1.227-1.022-2.045-1.227 1.636-.715 4.294-1.329 5.725-1.431-1.329.92-.715 2.044-1.431 2.249l.92.103c0-.409 0-.716.205-.92.92-2.249 4.805-2.556 6.747-3.067 0 0-1.022 1.329-1.738 1.636-.204 3.169-1.329 5.93-1.534 9.099.92 0 .92 1.022 1.125 1.636-.307.511-.716 0-1.125.103-1.431-.716.307-1.942-.818-2.965.614-2.556 1.534-5.112 1.534-7.77-.409 0-.511.409-.716.715-.307 2.556-1.022 4.907-1.635 7.258.204.205.716.409.716.818-.818.511 0 1.431-.307 2.044h-9.303l-.92 1.022h14.108l.102-.511c-2.044-2.249-1.329-5.521-.307-7.974l2.454-3.271c2.045-.818 3.272-3.271 5.418-4.089 0 1.125-1.33 1.533-2.045 2.147-.818 1.738-3.17 1.942-3.476 3.885.919 1.022 2.25 1.738 3.375 2.658 1.123.716.816 2.249 1.635 2.965.206.207 0 .616-.205.718z" fill="#000000"></path> <path d="M117.336 44.872c-.408.613-1.227 1.022-.715 2.147-1.023.614-.717 1.534-.41 2.045-.512.511-.818 1.534-.102 2.147-.818.92.205 1.738.512 2.044-.41.92 0 1.636 0 1.636-.104.613-1.229 1.636-1.637 1.942-.613 1.534-.408 4.703-.307 6.85 2.863-1.431 5.725-2.76 7.975-4.703-1.943-1.329-3.477-4.498-5.623-4.294-.205-2.249-1.125-6.236 2.045-10.325.408-.205 1.021-.307 1.328-.512-1.328-.204-3.066.613-4.293-.102 0 .001.614 1.023 1.227 1.125z" fill="#000000"></path> <path d="M124.186 43.849c0 .103.408.307.408.307s.41-.102.41-.204.102-.409 0-.511c-.104 0-.41-.102-.613-.102 0-.001-.205.409-.205.51l-.205.205-1.432-1.022.205-.205s.613-.614.92-.614c.307-.102 1.943 0 2.352.307.307.307.512.511.92 1.227 1.125.817 2.965.817 4.09 1.737-.205.307.307.818-.102 1.022-.307.103-1.023-.102-1.125.103l-.102.613-.41-.103s.205-.715 0-.715c-.205-.102-.613-.307-.818-.205-.102.103 0 .205.104.409 0 .204.51.307.818.204l.408.103.512.102c-.205.511-.307.715-1.023.511-.205.511.92.92 1.023 1.125-.104.205-.307.409-1.023 0 0 0-2.965 2.863-4.703 3.681-1.84.818-.102-.409-.102-.409.818-.307 4.396-3.374 4.396-3.68-.104-.205-.307-.613-.307-.92-.512-.205-1.533.102-1.943.408.205.92 1.84 5.521.613 12.473l-.203-.204c1.123-6.748-.717-12.166-.717-12.166-1.021.409-1.738.103-2.248.205-.205 4.191 3.168 4.805 1.941 10.326-3.578-.613-6.133-5.01-8.178-4.601-.104-.716-.818-1.942-.104-2.352-.203-.613-.408-1.431.512-1.942-.307-.818-.408-1.533.512-2.146-.205-.512-.104-1.636 1.021-1.841.104-.92.512-1.636 1.33-1.942-.92-.409-1.125-1.329-1.125-1.329.818.512 1.533.818 2.76.614l1.433 1.021zM89.426 120.32l-.103-5.725c0-1.738-1.124-3.58-2.658-4.602-.307-.102-.818-.307-1.227-.307.409 0 .92 0 1.432-.205 1.533-.715 3.374-2.658 3.374-6.031 0-2.557-1.022-4.498-2.863-5.828-1.738-1.227-3.68-1.533-5.725-1.533H65.913v4.09h3.578v20.141h-3.578v3.986h11.246v-3.986H73.58v-8.895h7.77c2.658.102 3.68 1.84 3.68 3.271l.307 9.609h7.667v-3.986h-3.578v.001zm-7.259-12.779H73.58v-7.361h8.077c.92 0 1.942 0 2.76.307 1.022.512 1.943 1.637 1.943 3.373-.001 2.148-1.943 3.681-4.193 3.681zM64.481 134.326c3.681 0 5.316 2.045 5.316 4.6 0 2.557-1.738 4.498-5.623 4.498h-2.658v7.055h-2.351v-16.152h5.316v-.001zm-2.965 7.055h2.863c1.738 0 2.964-.922 2.964-2.557 0-1.227-.715-2.453-2.863-2.453h-2.965v5.01h.001zM88.097 150.479h-2.556l-2.044-4.805h-7.054l-1.942 4.805h-2.556l7.156-16.256h1.636l7.36 16.256zm-10.734-6.952h5.214l-2.76-6.34-2.454 6.34zM114.984 150.479h-2.351v-16.153h2.351v16.153zM131.854 137.801c-1.533-1.227-2.965-1.635-4.191-1.635-1.533 0-2.762.715-2.762 1.84 0 3.17 7.566 3.066 7.566 8.281 0 2.453-2.045 4.293-4.908 4.293-1.84 0-3.475-.408-4.906-1.43v-2.965c1.328 1.533 2.965 2.352 4.703 2.352 1.941 0 2.861-1.125 2.861-2.045 0-3.271-7.668-3.682-7.668-8.076 0-2.658 2.148-4.295 5.316-4.295 1.432 0 2.658.307 3.988 1.125v2.555h.001zM105.068 148.537c-.307-.41-.613-.818-.92-1.33-1.227-2.045-2.25-3.477-3.783-4.396 1.84-.715 2.863-2.146 2.863-3.986 0-2.76-2.148-4.498-5.623-4.498h-4.192v16.152h2.453v-7.055h1.022c1.226 0 2.25.41 4.396 3.682l2.25 3.373h2.76l-1.226-1.942zm-7.668-7.156h-1.534v-5.113H97.4c2.352 0 3.271.92 3.271 2.455.102 1.328-.612 2.658-3.271 2.658z" fill="#000000"></path> </g> </g></svg>
                </a>
                <a className="flex items-center lg:justify-center" target="_blank">
                <svg fill="#000000" height="140px" width="140px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2500 583" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M508.9,501.4c0,39.3-32.8,71.2-57.5,71.2H172.1L523.4,11.4H53.7v93h24.1c0-39.3,25.4-71.1,50.2-71.1h241.3L15.9,594.4h509.6 l0-93H508.9"></path> <g> <polygon points="918.3,576.1 918.3,576.1 918.3,576.1 "></polygon> <path d="M1118.4,549L846.6,11.4l-249.1,538c-4.4,11.8-28.4,26.7-62.4,26.7v18.2h132.6v-18.2c-24.6,0-51-12.2-44.6-26.8L683,419.4 h229.8L978.1,549c7.4,13.1-25.7,27.2-59.8,27.2v18.2h276l0.1-18.2C1152.6,576.1,1127.1,563.1,1118.4,549z M693,398.4l99.4-218.2 l111,218.2H693z"></path> </g> <path d="M1226,33.9c40.4,0,73.8,10.4,73.8,23c0,100-0.2,491.5,0,491.5c0,13.4-32.9,28.3-73.4,28.3l-0.1,17.6h270.2v-16.4 c-40.1,0-72.6-16-72.6-29.4V29h77.9c75,0,135.8,62.3,135.8,133c0,70.7-60.8,128.1-135.9,128.1h-53.9c0,0,182.6,276.5,182.9,276.5 c7.2,10.5,10.8,27.8,10.8,27.8h196.9v-16.4c-37.9,0-57.7-15.7-68.7-29.5l-175.8-229.4c84.4-5.6,149.7-73.8,149.7-154.8 c0-84.6-72.7-152.9-162.4-152.9H1226V33.9"></path> <path d="M2440,549L2168.2,11.4l-249.1,538c-4.4,11.8-28.3,27.3-62.4,27.3v17.6h132.6v-16.4c-24.6,0-50.9-14-44.6-28.6l59.9-129.9 h229.8l65.3,129.6c7.5,13.1-25.7,27.8-59.8,27.8h0v17.6h276l0.1-17C2474.2,577.4,2448.7,563.1,2440,549z M2014.5,398.4l99.4-218.2 l111,218.2H2014.5z"></path> </g></svg>
                </a>
                <a className="flex items-center lg:justify-center" target="_blank">
               <svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Dior icon</title><path d="M3.767 16.383h.622c2.313 0 2.934-.214 3.748-1.296.814-1.081.91-2.634.91-3.159 0-.525-.139-1.842-.953-2.956C7.28 7.858 5.92 7.569 4.73 7.569h-.968c-.23 0-.242.102-.242.262v8.349c0 .182.065.203.247.203M0 16.58c0-.084.11-.099.211-.102 1.178-.033 1.398-.074 1.532-.214.074-.077.182-.14.182-.685v-7.51c0-.674-.82-.567-1.398-.626-.203-.02-.22-.048-.22-.107s.039-.087.145-.091h4.745c5.216 0 5.483 3.813 5.483 4.83 0 2.186-1.445 4.59-4.465 4.59H.152c-.074 0-.152-.01-.152-.086m15.638-1.98c.124 1.126.795 2.002 1.625 1.855.833-.147 1.25-.942 1.15-2.215-.103-1.295-.744-1.94-1.605-1.863-.891.081-1.296 1.097-1.17 2.223m.824-2.421c1.072-.2 2.597.036 2.944 1.714.346 1.678-.809 2.572-1.811 2.79-.98.212-2.643.06-2.943-1.744a2.35 2.35 0 0 1 1.81-2.76m-3.849-1.514a.62.62 0 1 0 0-1.24.62.62 0 0 0 0 1.24m-1.283 2.4c-.034-.066.03-.109.218-.158.21-.056.669-.196 1.033-.402.365-.206.427-.227.504-.202.078.026.07.162.07.272v3.47c0 .195.026.276.114.357.089.081.31.129.596.129.13 0 .17.015.17.07 0 .055-.04.055-.092.055h-2.517c-.077 0-.096-.033-.096-.066 0-.04.035-.067.152-.067.098 0 .554.034.657-.202.04-.09.06-.217.06-.334v-2.753c0-.21-.163-.302-.35-.257-.219.05-.474.174-.519.088m8.868-.001c-.007-.045-.007-.084.218-.155.224-.069.769-.254 1.1-.437.33-.184.386-.21.463-.159.078.051.056.177.056.265v.898c.12-.199.519-.86.834-1.056.249-.153.336-.166.49-.17.185-.003.621.111.64.572.015.36-.25.504-.42.482-.135-.02-.231-.144-.312-.27-.08-.126-.21-.202-.338-.158-.129.044-.85.512-.891 1.178-.03.49 0 2.016 0 2.016 0 .232.088.321.192.383.103.063.481.066.588.081.107.015.103.04.103.074 0 .032 0 .048-.095.048H20.29c-.08 0-.113-.016-.113-.063 0-.066.106-.055.187-.066.08-.011.51.024.633-.192.09-.141.079-.368.079-.368l-.013-2.682c0-.217-.064-.249-.123-.283-.06-.034-.16-.053-.37.019-.198.065-.334.126-.372.043Z"></path></g></svg>
                </a>
            </div>
            </div>
        </div>
    </section>
    );
}

export default Customers;
