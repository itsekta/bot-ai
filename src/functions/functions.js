export const createTimeStamp = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Handle midnight (0 hours)

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;
};

export const findQuestionFromSampleData = (array, substring) => {
  const lowerSubstring = substring.toLowerCase();
  if (["hi", "hii", "hello", "hey"].includes(lowerSubstring)) {
    return [{ response: "Hello, how may I help you?" }];
  }
  return array.filter((obj) =>
    obj.question.toLowerCase().includes(lowerSubstring)
  );
};

export const saveChatToLocal = (currentChat) => {
  const newConvo = {
    id: `convo-${Date.now()}`, // Use Date.now() for a unique timestamp
    conversation: currentChat,
  };

  const pastConvo = JSON.parse(localStorage.getItem("pastConversations")) || [];
  const allConvo = [newConvo, ...pastConvo];

  localStorage.setItem("pastConversations", JSON.stringify(allConvo));
};

export const updateByLikeDislike = (
  chatCardId,
  reaction,
  currentChat,
  iconsData
) => {
  const {
    likeOutlinedIcon = "/src/assets/like-outline-black.svg",
    dislikeOutlinedIcon = "/src/assets/dislike-outline-black.svg",
    likeFilledIcon = "/src/assets/like-filled-black.svg",
    dislikeFilledIcon = "/src/assets/dislike-filled-black.svg",
  } = iconsData;

  return currentChat.map((chatCard) => {
    if (chatCard.id === chatCardId) {
      return {
        ...chatCard,
        like: reaction === "like" ? likeFilledIcon : likeOutlinedIcon,
        dislike: reaction === "like" ? dislikeOutlinedIcon : dislikeFilledIcon,
      };
    }
    return chatCard;
  });
};
