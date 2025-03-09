import { JSX, useState } from "react";
import { ResponseData, Word } from "../../models/MyModels";
import { createNewWord } from "../../service/MyService";
import InputBoxComponent from "../../components/InputBoxComponent";
import Sizebox from "../../common/Sizebox";

const KanjiPage = () => {
  const [formData, setFormData] = useState<Word>({
    firstKanji: "",
    firstFurikana: "",
    hirakana: "",
    kunHirakana: "",
    en: "",
    my: "",
    type: 1, // Default type set to 'noun'
    level: 1,
    isParent: false,
    isMandatory: false,
    isVocab: false,
  });
  const [responseData, setResponseData] = useState<ResponseData>();
  const element: JSX.Element[] = [];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createNewWord(formData)
      .then((response) => {
        setResponseData(response.data);
        setFormData({
          firstKanji: "",
          firstFurikana: "",
          hirakana: "",
          kunHirakana: "",
          en: "",
          my: "",
          type: 1, // Default type set to 'noun'
          level: 1,
          isParent: false,
          isMandatory: false,
          isVocab: false,
        });
      })
      .catch((error) => console.error(error.message));
  };

  const renderError = () => {
    let index = 1;
    Object.entries(responseData!.error).forEach(([key, value]) => {
      element.push(
        <li key={key}>
          {index}.{value}
        </li>
      );
      index = index + 1;
    });
    return element;
  };

  return (
    <>
      <div className=" py-12 px-4 sm:px-6 lg:px-8 mt-7">
        <div className="md:max-w-md xl:max-w-lg mx-auto bg-teal-50 p-8 rounded-lg border-2 border-black">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-bold text-center text-gray-800 mb-4">
            NEW JAPANESE WORD
          </h2>
          {responseData?.error != null && (
            <div className="text-red-600 w-full py-5 bg-red-100 mb-7 rounded-lg">
              <ul className="list text-center">{renderError()}</ul>
            </div>
          )}
          {responseData?.message != null && (
            <div className="text-green-600 w-full py-5 bg-green-200 mb-7 rounded-lg">
              <h2 className="list text-center">{responseData.message}</h2>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Kanji and Furikana fields */}

            <div className="border-2 border-gray-500 px-3 py-3 rounded-lg">
              <InputBoxComponent
                label="First Kanji"
                value={formData.firstKanji}
                onChange={handleChange}
                name="firstKanji"
                isImportant={true}
              />
              <Sizebox height="20px" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputBoxComponent
                  label="Second Kanji"
                  name="secondKanji"
                  value={formData.secondKanji}
                  onChange={handleChange}
                />
                <InputBoxComponent
                  label="Third Kanji"
                  name="thirdKanji"
                  value={formData.thirdKanji}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Furikana fields */}
            <div className="border-2 border-gray-500 px-3 py-3 rounded-lg">
              <InputBoxComponent
                label="First Furikana"
                value={formData.firstFurikana}
                onChange={handleChange}
                name="firstFurikana"
                isImportant={true}
              />
              <Sizebox height="20px" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputBoxComponent
                  label="SecondFurikana"
                  name="secondFurikana"
                  value={formData.secondFurikana}
                  onChange={handleChange}
                />
                <InputBoxComponent
                  label="ThirdFurikana"
                  name="thirdFurikana"
                  value={formData.thirdFurikana}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Hirakana */}
            <InputBoxComponent
              label="Hirakana"
              value={formData.hirakana}
              onChange={handleChange}
              name="hirakana"
              isImportant={true}
            />

            {/* Kun Hirakana */}
            <InputBoxComponent
              label="Kun Hirakana"
              value={formData.kunHirakana}
              onChange={handleChange}
              name="kunHirakana"
              isImportant={true}
            />

            {/* English Translation */}
            <InputBoxComponent
              label="English Translation"
              value={formData.en}
              onChange={handleChange}
              name="en"
              isImportant={true}
            />

            {/* Myanmar Translation */}
            <InputBoxComponent
              label="Myanmar Translation"
              value={formData.my}
              onChange={handleChange}
              name="my"
              isImportant={true}
            />

            {/* Type (Dropdown) */}

            {/* Level (Dropdown) and Unit (Input) in the same row */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label htmlFor="type" className="block font-medium">
                  Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="noun">Noun</option>
                  <option value="verb">Verb</option>
                  <option value="adverb">Adverb</option>
                  <option value="adjective">Adjective</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="level"
                  className="block text-gray-700 font-medium"
                >
                  Level <span className="text-red-500">*</span>
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <InputBoxComponent
                label="Unit"
                value={formData.unit}
                onChange={handleChange}
                name="unit"
              />
            </div>

            {/* Checkbox fields */}
            <div className="flex items-center space-x-4 mb-6 md:justify-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isVocab"
                  name="isVocab"
                  checked={formData.isVocab}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isVocab" className="text-gray-700">
                  Is Vocab
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isMandatory"
                  name="isMandatory"
                  checked={formData.isMandatory}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isMandatory" className="text-gray-700">
                  Is Mandatory <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isParent"
                  name="isParent"
                  checked={formData.isParent}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isParent" className="text-gray-700">
                  Is Parent <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-teal-500 text-white rounded-md border-2 border-teal-600 hover:bg-teal-600 transition-all duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default KanjiPage;
