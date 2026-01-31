import React, { useState } from "react";
import { toast } from "react-toastify";

const ToyQnA = () => {
    const [question, setQuestion] = useState("");

    const qnaData = [
        {
            question: "Are the toys safe for children?",
            answer:
                "Yes. All our toys are made with child-safe, non-toxic materials and meet international safety standards."
        },
        {
            question: "What age group are the toys suitable for?",
            answer:
                "Each toy comes with a recommended age range mentioned in the product details to ensure safe and enjoyable play."
        },
        {
            question: "Do you offer educational toys?",
            answer:
                "Absolutely! We have a wide range of educational toys that help improve creativity, problem-solving, and motor skills."
        },
        {
            question: "Can I return or exchange a toy?",
            answer:
                "Yes. Toys can be returned or exchanged within 7 days if they are unused and in original packaging."
        },
        {
            question: "Do you offer home delivery?",
            answer:
                "Yes, we provide home delivery across the country with fast and reliable shipping."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question.trim()) return;

        toast("Your question has been submitted. We’ll get back to you soon!");
        setQuestion("");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Toys – Questions & Answers
                </h2>

                {/* QnA Section */}
                <div className="space-y-6 mb-12">
                    {qnaData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                        >
                            <h3 className="font-semibold text-gray-800 mb-2">
                                ❓ {item.question}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Ask a Question Form */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Have another question?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        If your question is not listed above, feel free to ask us.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Write your question here..."
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                        >
                            Submit Question
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ToyQnA;
