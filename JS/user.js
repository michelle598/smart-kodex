const users = [
  {
    name: "Blessing Obi",
    status: "inactive",
    course: "Data Science",
    progress: 20,
    date: "Mar 06, 2025",
  },
  {
    name: "Chidubem Nwosu",
    status: "active",
    course: "React Native",
    progress: 80,
    date: "Feb 22, 2025",
  },
  {
    name: "Ngozi Eze",
    status: "active",
    course: "UI/UX Design",
    progress: 40,
    date: "Dec 18, 2025",
  },
  {
    name: "Amara Nwafor",
    status: "suspended",
    course: "Cyber Security",
    progress: 15,
    date: "Jan 8, 2025",
  },
  {
    name: "Chinedu Okafor",
    status: "inactive",
    course: "Product Management",
    progress: 50,
    date: "Mar 15, 2025",
  },
  {
    name: "Ifeoma Uzo",
    status: "active",
    course: "Web Development",
    progress: 70,
    date: "Jan 11, 2025",
  },
  {
    name: "Emeka Okorie",
    status: "inactive",
    course: "Web Design",
    progress: 30,
    date: "Mar 24, 2025",
  },
];

const table = document.getElementById("userTable");

users.forEach((user) => {
  const row = `
    <tr>
      <td>${user.name}</td>
      <td><span class="badge ${user.status}">${user.status}</span></td>
      <td>${user.course}</td>
      <td>
        <div class="progress">
          <span style="width:${user.progress}%"></span>
        </div>
        ${user.progress}%
      </td>
      <td>${user.date}</td>
    </tr>
  `;
  table.innerHTML += row;
});
