import { useState, useEffect, useRef } from "react";
import { getUser } from "../../services/User";
import { userProfile } from "../../@types/user";

export default function Track() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sheetRef = useRef(null)
 


  return { isOpen, setIsOpen, sheetRef };
}
