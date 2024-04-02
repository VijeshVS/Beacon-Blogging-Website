import { InputField } from '../components/InputField'
import { InputLabels } from '../components/InputLabels'
import { SignButton } from '../components/SignButton'
import {Title} from '../components/Title'

export function UpdateUserPage(){
    return <div>
        <div className='mt-16'>
        <Title text="Update User Details"/>
        </div>
        <div className='flex justify-center mt-4'>
            <img className='h-16 w-16' src='https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png'/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Name"/>
        <InputField placeholder="Enter your name"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Email Address"/>
        <InputField placeholder="m@example.com"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Image Link"/>
        <InputField placeholder="Paste your image link here"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <InputLabels label="Confirm Password"/>
        <InputField placeholder="Please confirm your password"/>
        </div>
        <div className='flex items-center mt-1 flex-col'>
        <SignButton text="Update"/>
        </div>
    </div>
}