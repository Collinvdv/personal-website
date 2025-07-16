<?php
// results.php
$votes = file('votes.txt', FILE_IGNORE_NEW_LINES);

$yes_count = 0;
$no_count = 0;

foreach ($votes as $vote) {
    if ($vote === 'yes') {
        $yes_count++;
    } elseif ($vote === 'no') {
        $no_count++;
    }
}

$total_votes = $yes_count + $no_count;
$yes_percent = ($yes_count / $total_votes) * 100;
$no_percent = ($no_count / $total_votes) * 100;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Mustache Voting Results</title>
    <script crossorigin src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"></script>
    <script crossorigin src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/recharts/2.1.14/recharts.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }

        h1 {
            color: #333;
        }

        .chart-container {
            width: 600px;
            height: 400px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <h1>Mustache Voting Results</h1>
    <p>Total votes: <?php echo $total_votes; ?></p>
    <p>Yes votes: <?php echo $yes_count; ?> (<?php echo number_format($yes_percent, 2); ?>%)</p>
    <p>No votes: <?php echo $no_count; ?> (<?php echo number_format($no_percent, 2); ?>%)</p>

    <div class="chart-container">
        <div id="chart"></div>
    </div>

    <script type="application/vnd.ant.react">
        const VotingChart = () => {
            const data = [
                { name: 'Yes', value: <?php echo $yes_count; ?> },
                { name: 'No', value: <?php echo $no_count; ?> }
            ];

            const { PieChart, Pie, Legend, Tooltip, Cell } = window.recharts;

            return (
                <PieChart width={600} height={400}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#4CAF50' : '#F44336'} />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                </PieChart>
            );
        };

        ReactDOM.render(<VotingChart />, document.getElementById('chart'));
    </script>
</body>
</html>