const facebook = require('../assets/Simple White/Facebook.png');
const instagram = require('../assets/Simple White/Instagram.png');
const twitter = require('../assets/Simple White/Twitter.png');
const youtube = require('../assets/Simple White/Youtube.png');

const Footer = () => {
  return (
    <div className="bg-primary px-[22rem] text-link font-Netflix text-xs pb-5">
        <ul className="flex">
            {   [facebook, instagram, twitter, youtube].map((src, index) => (
            <img src={src} className='w-10 m-1 cursor-pointer' key={index} alt="" />   ))}
        </ul>
        <div className="flex m-3 space-x-32">
            <ul className="flex flex-col space-y-4">
                {   ['Audio Description', 'Investor Relations', 'Legal Notices',].map((name, index) => (
                <a href="" className="hover:underline" key={index}>{name}</a>    ))}
            </ul>
            <ul className="flex flex-col space-y-4">
                {   ['Help Center', 'Jobs', 'Cookie Preferences'].map((name, index) => (
                <a href="" className="hover:underline" key={index}>{name}</a>    ))}
            </ul>
            <ul className="flex flex-col space-y-4">
                {   ['Gift Cards', 'Terms of Use', 'Corporate Information'].map((name, index) => (
                <a href="" className="hover:underline" key={index}>{name}</a>    ))}
            </ul>
            <ul className="flex flex-col space-y-4">
                {   ['Media Center', 'Privacy', 'Contact Us'].map((name, index) => (
                <a href="" className="hover:underline" key={index}>{name}</a>    ))}
            </ul>
        </div>
        <div className="hover:text-white w-max p-2 my-5 mx-3 outline outline-link cursor-pointer">Service Code</div>
        <span className="m-3">Netflix Clone by Pranansh Singh 2003-Today :)</span>
    </div>
  )
}

export default Footer;