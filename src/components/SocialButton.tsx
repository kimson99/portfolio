interface SocialButtonProps {
  url: string;
  icon: React.ReactElement;
}

const SocialButton = ({ icon, url }: SocialButtonProps) => {
  return (
    <div className="md:flex text-white">
      <a href={url} target="_blank">
        <div className="flex items-center cursor-pointer gap-1 solid border-emerald-700 p-4 rounded-xl">
          <span className="text-2xl">{icon}</span>
        </div>
      </a>
    </div>
  );
};

export default SocialButton;
