Write-Output "===== PROJECT SNAPSHOT ====="
Write-Output ""

Write-Output "--- GIT ---"
git branch --show-current
git status --short

Write-Output ""
Write-Output "--- RECENT COMMITS ---"
git log -8 --oneline

Write-Output ""
Write-Output "--- SRC ---"
Get-ChildItem src -Recurse -File |
    ForEach-Object {
        $_.FullName.Replace((Get-Location).Path + '\', '')
    }

Write-Output ""
Write-Output "--- TESTS ---"
Get-ChildItem tests -Recurse -File |
    ForEach-Object {
        $_.FullName.Replace((Get-Location).Path + '\', '')
    }

Write-Output ""
Write-Output "--- DRILLS ---"
Get-ChildItem drills -Recurse -File |
    ForEach-Object {
        $_.FullName.Replace((Get-Location).Path + '\', '')
    }

Write-Output ""
Write-Output "--- DEFINITIONS ---"
if (Test-Path definitions) {
    Get-ChildItem definitions -Recurse -File |
        ForEach-Object {
            $_.FullName.Replace((Get-Location).Path + '\', '')
        }
}
else {
    Write-Output "[NOT FOUND]"
}

Write-Output ""
Write-Output "--- LEARNING STATE ---"
if (Test-Path docs\learning-state.md) {
    Get-Content docs\learning-state.md -Raw
}
else {
    Write-Output "[NOT FOUND]"
}