import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { MaterialSymbol } from "react-material-symbols";
import Label from "./label/label";

export interface FileSelectProps {
    label?: string;
    className?: string;
    valueUrl?: string | null;
    onChange: (file: File) => void;
    containerClassName?: string | null;
    placeholderText?: string | null;
}

const FileSelect = ({
    label,
    className,
    valueUrl,
    onChange,
    placeholderText,
    containerClassName,
}: FileSelectProps) => {
    const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(valueUrl || null);
    const [filePreviewText, setFilePreviewText] = useState<string | null>(null);

    const handleDrop = (acceptedFiles: File[]) => {
        if (!acceptedFiles.length) return;
        const url = window.URL.createObjectURL(acceptedFiles[0]);
        setFilePreviewUrl(url);
        if (!url) return;
        switch (true) {
            case acceptedFiles[0].type.split("/")[0] === "image":
                handleImageDrop(url);
                break;
            case acceptedFiles[0].type.split("/")[1] === "vnd.ms-cab-compressed":
                setFilePreviewText('Файл .cab');
                break;
            default:
                setFilePreviewText("Файл");
                break;
        }
        onChange(acceptedFiles[0]);
    };

    const handleImageDrop = (url: string) => {
        const img = new Image();
        img.onload = () => {
            setFilePreviewText(`${img.width}${img.height} пикс.`);
        };
        img.src = url;
    };

    useEffect(() => {
        if (valueUrl) {
            handleImageDrop(valueUrl);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueUrl]);

    return (
        <div
            className={cn(
                "h-full gap-xs flex flex-col [&>div]:flex-1 focus:[&_*]:outline-none",
                containerClassName
            )}
        >
            {label && <Label>{label}:</Label>}
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input className="h-full" {...getInputProps()} />
                        <div
                            className={cn(
                                "flex flex-1 select-none border border-black/4 text-[#575757] dark:text-white/60 bg-[#efefef] dark:bg-white/10 hover:bg-[#ededed] active:bg-[#ededed] cursor-pointer active:scale-slighter transition-transform duration-50 rounded bg-no-repeat justify-center bg-center overflow-hidden bg-cover",
                                className,
                                { "p-3": !filePreviewUrl }
                            )}
                            style={{
                                backgroundImage: `url(${filePreviewUrl})`,
                            }}
                        >
                            {filePreviewUrl ? (
                                <div className="h-[35%] self-end p-2.5 bg-[linear-gradient(0deg,#444_-8.33%,rgba(0,0,0,0.00)_98.53%)] w-full items-end flex text-white gap-sm">
                                    <MaterialSymbol icon="image" size={15} weight={600} />
                                    <div className="text-[12px] font-medium leading-[130%]">
                                        {/* {t("changeImage")} */}
                                        {filePreviewText}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex self-center flex-col gap-sm text-center items-center">
                                    <MaterialSymbol icon="upload_file" size={24} weight={600} />
                                    <div className="font-semibold text-[12px] tracking max-w-[200px]">
                                        {placeholderText || "Нажмите или перетащите сюда файл для загрузки"}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Dropzone>
        </div>
    );
};

export default FileSelect;
