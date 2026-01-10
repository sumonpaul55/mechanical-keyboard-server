"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLovePercentage = void 0;
const calculateLovePercentage = (name, partnerName) => {
    // const partner = partnerName.trim().toLowerCase();
    // // Special rule 👑
    // if (partner.includes("sumon") || partner.includes("suman")) {
    //   return 100;
    // }
    // Simple deterministic calculation
    const combinedLength = name.trim().length + partnerName.trim().length;
    const randomFactor = Math.floor(Math.random() * 30); // adds realism
    let percentage = (combinedLength * 7 + randomFactor) % 100;
    // Ensure range 10–99
    if (percentage < 10)
        percentage += 20;
    if (percentage >= 100)
        percentage = 99;
    return percentage;
};
exports.calculateLovePercentage = calculateLovePercentage;
