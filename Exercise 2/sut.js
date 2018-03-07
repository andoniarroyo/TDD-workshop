export default (paidAmount, age) => {
    if (age < 65 || age > 150 || !paidAmount) {
        return 0;
    }

    const monthlyPension = paidAmount / (151 - age);
    return Math.ceil(monthlyPension * 100)/100;
};