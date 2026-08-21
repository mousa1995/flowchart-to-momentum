import { useEffect, useState } from "react";

function DailyGoal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [goal, setGoal] = useState("");
  const [draftedGoal, setDraftedGoal] = useState("");

  const onPerformGoalRegistration = () => {
    setGoal(draftedGoal);
    localStorage.setItem("dailyGoal", draftedGoal);
    setIsEditing(false);
    setIsOpen(false);
  };

  const onCancellSttingGoal = () => {
    setDraftedGoal(goal);
    setIsEditing(false);
    setIsOpen(false);
  };

  const onEditing = () => {
    setIsEditing(true);
    setIsOpen(true);
  };

  useEffect(() => {
    const savedGoal = localStorage.getItem("dailyGoal");
    if (savedGoal === null) {
      setIsOpen(true);
    }
    if (savedGoal !== null) {
      setGoal(savedGoal);
      setDraftedGoal(savedGoal);
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <div>
        {isOpen ? (
          <div>
            <input
              placeholder="لطفا هدف امروز را وارد کنید"
              value={draftedGoal}
              type="text"
              onChange={(e) => setDraftedGoal(e.target.value)}
            />
            <button onClick={onPerformGoalRegistration}>ثبت هدف جدید</button>
            <button onClick={onCancellSttingGoal}>انصراف</button>
          </div>
        ) : (
          <div>
            <h3>{goal}</h3>
            <button onClick={onEditing}>تغییر هدف امروز</button>
          </div>
        )}
      </div>
    </>
  );
}

export default DailyGoal;
